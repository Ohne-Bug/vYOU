/* Copyright 2019 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

#ifndef TENSORFLOW_LITE_MICRO_EXAMPLES_PERSON_DETECTION_ESP_APP_CAMERA_ESP_H_
#define TENSORFLOW_LITE_MICRO_EXAMPLES_PERSON_DETECTION_ESP_APP_CAMERA_ESP_H_

#include "sensor.h"
#include "esp_camera.h"
#include "esp_log.h"
#include "esp_system.h"

#include "esp_main.h"

/**
 * PIXFORMAT_RGB565,    // 2BPP/RGB565
 * PIXFORMAT_YUV422,    // 2BPP/YUV422
 * PIXFORMAT_GRAYSCALE, // 1BPP/GRAYSCALE
 * PIXFORMAT_JPEG,      // JPEG/COMPRESSED
 * PIXFORMAT_RGB888,    // 3BPP/RGB888
 */
// #if defined DISPLAY_SUPPORT
// #define CAMERA_PIXEL_FORMAT PIXFORMAT_RGB565
// #else
// #define CAMERA_PIXEL_FORMAT PIXFORMAT_GRAYSCALE
// #endif
/*
 * FRAMESIZE_96X96,    // 96x96
 * FRAMESIZE_QQVGA,    // 160x120
 * FRAMESIZE_QQVGA2,   // 128x160
 * FRAMESIZE_QCIF,     // 176x144
 * FRAMESIZE_HQVGA,    // 240x176
 * FRAMESIZE_QVGA,     // 320x240
 * FRAMESIZE_CIF,      // 400x296
 * FRAMESIZE_VGA,      // 640x480
 * FRAMESIZE_SVGA,     // 800x600
 * FRAMESIZE_XGA,      // 1024x768
 * FRAMESIZE_SXGA,     // 1280x1024
 * FRAMESIZE_UXGA,     // 1600x1200
 */
// #define CAMERA_FRAME_SIZE FRAMESIZE_UXGA

// #define CAMERA_MODEL_AI_THINKER
// #define CAMERA_MODULE_NAME "AI-THINKER"
// #define CAMERA_PIN_PWDN 32
// #define CAMERA_PIN_RESET -1 //software reset will be performed
// #define CAMERA_PIN_XCLK 0
// #define CAMERA_PIN_SIOD 26
// #define CAMERA_PIN_SIOC 27

// #define CAMERA_PIN_D7 35
// #define CAMERA_PIN_D6 34
// #define CAMERA_PIN_D5 39
// #define CAMERA_PIN_D4 36
// #define CAMERA_PIN_D3 21
// #define CAMERA_PIN_D2 19
// #define CAMERA_PIN_D1 18
// #define CAMERA_PIN_D0 5
// #define CAMERA_PIN_VSYNC 25
// #define CAMERA_PIN_HREF 23
// #define CAMERA_PIN_PCLK 22

// #define XCLK_FREQ_HZ 20000000

// #define CAMERA_PIXEL_FORMAT PIXFORMAT_RGB565

#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27

#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

#ifdef __cplusplus
extern "C" {
#endif

int app_camera_init();

#ifdef __cplusplus
}
#endif

#endif  // TENSORFLOW_LITE_MICRO_EXAMPLES_PERSON_DETECTION_ESP_APP_CAMERA_ESP_H_
