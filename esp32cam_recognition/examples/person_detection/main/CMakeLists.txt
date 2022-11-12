
#
# Main component of TF Micro project 'person_detection'.
#

idf_component_register(
    SRCS
        "detection_responder.cc"
        "image_provider.cc"
        "main.cc"
        "main_functions.cc"
        "model_settings.cc"
        "person_detect_model_data.cc"
        "app_camera_esp.c"

    PRIV_REQUIRES tflite-lib console esp32-camera arduino-esp32 static_images spi_flash fb_gfx
    INCLUDE_DIRS "")
