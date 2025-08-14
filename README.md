# Тест-кейсы:
# 1) API-тест:
# Распознавание лиц:
# - Отправить запрос с на ручку /api/detect с аттрибутами:
# {
#  "config": [
#    {
#      "name": "Age"
#    },
#    {
#      "name": "EyeRight"
#    },
#    {
#      "name": "EyeLeft"
#    },
#    {
#      "name": "Emotion"
#    },
#    {
#      "name": "Smile"
#    },
#    {
#      "name": "Glasses"
#    },
#    {
#      "name": "HeadCovering"
#    },
#    {
#      "name": "ForeheadCovering"
#    },
#    {
#      "name": "Mouth"
#    },
#    {
#      "name": "MedicalMask"
#    },
#    {
#      "name": "Occlusion"
#    },
#    {
#      "name": "StrongMakeup"
#    },
#    {
#      "name": "Headphones"
#    }
#  ]
# }
# Ожидаемый результат: статус-код 200, параметр msg = FACER_OK, непустой атрибут results

# 2) UI-тест:
# Распознавание активности(liveness detection)
# Сценарий:
# - Предшаг: разрешить в браузере доступ к камере
# - Открыть страницу https://faceapi.regulaforensics.com
# - Нажать на кнопку Try FaceLiveness
# - Нажать на кнопку Go
# - Ожидаемый результат: отображается камера