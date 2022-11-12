# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "/opt/esp-idf/components/bootloader/subproject"
  "/home/revolver/prog/hackathon22/tflite-micro-esp-examples/examples/person_detection/build/bootloader"
  "/home/revolver/prog/hackathon22/tflite-micro-esp-examples/examples/person_detection/build/bootloader-prefix"
  "/home/revolver/prog/hackathon22/tflite-micro-esp-examples/examples/person_detection/build/bootloader-prefix/tmp"
  "/home/revolver/prog/hackathon22/tflite-micro-esp-examples/examples/person_detection/build/bootloader-prefix/src/bootloader-stamp"
  "/home/revolver/prog/hackathon22/tflite-micro-esp-examples/examples/person_detection/build/bootloader-prefix/src"
  "/home/revolver/prog/hackathon22/tflite-micro-esp-examples/examples/person_detection/build/bootloader-prefix/src/bootloader-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "/home/revolver/prog/hackathon22/tflite-micro-esp-examples/examples/person_detection/build/bootloader-prefix/src/bootloader-stamp/${subDir}")
endforeach()
