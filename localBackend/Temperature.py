import time
import board
import adafruit_dht
import statistics

### Constants
sensor_pin = board.D27                          # pin where the sensor communicates data to the raspi
number_of_samples_before_medium = 5             # times to measure before taking median
sample_sleep = .05                              # delay between median measurements
time_out = .05                                  # delay between runs
dht_device = adafruit_dht.DHT11(sensor_pin)     # connection to the sensor

### Initialize variables
temperature_samples = []                        # contains the median values for the temperatures
humidity_samples = []                           # contains the median values for the humidity

### Gets the temperature value from the sensor defined times and then returns the median
def check_temperature() :
    temperature_samples.clear()                 # clear old values

    # fill the array until it reaches theset threashhold
    while len(temperature_samples) < number_of_samples_before_medium : 
        try:
            temperature_c = dht_device.temperature
            temperature_samples.append(temperature_c)
        except RuntimeError as error:
            print(error.args[0])
        time.sleep(sample_sleep)
    return (statistics.median(temperature_samples))

def check_humidity() :
    humidity_samples.clear()

    while len(humidity_samples) < number_of_samples_before_medium :
        try:
            humidity = dht_device.humidity
            humidity_samples.append(humidity)
        except RuntimeError as error:
            print(error.args[0])
        time.sleep(sample_sleep)
    return (statistics.median(humidity_samples))

for i in range(1000) :
    print(str(check_temperature()) + "°C")
    print(str(check_humidity()) + "%")
    time.sleep(.05)