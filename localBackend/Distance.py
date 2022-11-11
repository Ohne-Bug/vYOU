import RPi.GPIO as GPIO
import time
import statistics

### Constants
trigger_pin = 4                     # is set to high to send ultrasonic wave.
echo_pin = 17                       # indicates a return when it is set to high

number_of_samples_before_medium = 5 # number of measurements before calculating medium and returning.
sample_sleep = .05                  # time sleeping before remeasuring for median
calibration_distance = 30           # distance at which the sensor was calibrated
calibration_value = 1750            # value returned for sample distance
time_out = .05                      # if gets stuck in loop

### Setup GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

### Setup trigger and echo pins
GPIO.setup(trigger_pin, GPIO.OUT)
GPIO.setup(echo_pin, GPIO.IN, pull_up_down = GPIO.PUD_DOWN)

### Initialize variables
samples_list = []                   # stores the distance samples
stack = []                          # stores the start and end values for the timers

### Defines callback function that is called when the GPIO detects a raising edge
def timer_call(channel) :
    now = time.monotonic()          # measures the time
    stack.append(now)               # adds start and end times to the stack

### Sends a frequency pulse
def trigger() : 
    GPIO.output(trigger_pin, GPIO.HIGH)
    time.sleep(0.00001)
    GPIO.output(trigger_pin, GPIO.LOW)

### generates an ultrasonic pulse that then is translated to distance
def check_distance() :
    samples_list.clear()            # clear all the older samples

    # fill the sample space with values until it reaches the threashhold
    while len(samples_list) < number_of_samples_before_medium :
        trigger()                   # send an ultrasonic signal with the sensor

        while len(stack) < 2 :      # record start and end time of the trigger
            start = time.monotonic()
            while time.monotonic() < start + time_out :
                pass

            trigger()               # send second ultrasonic pulse for return of the signal
        
        if len(stack) == 2 :        # stack has been filled
            samples_list.append(stack.pop() - stack.pop())  # add the sample value to the sample-mean list

        elif len(stack) > 2 :       # if it somehow records more than two values clear the array
            stack.clear()

        time.sleep(sample_sleep)    # pause to avoid overloading the sensor
    
    return (statistics.median(samples_list) * 1000000 * calibration_distance / calibration_value)   # calculate the median and level it with the calibrated value

### Main
GPIO.add_event_detect(echo_pin, GPIO.BOTH, callback = timer_call)   # add rising and falling detection on the GPIO pin.

for i in range(1000) :
    print(check_distance(), 1) 