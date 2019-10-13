
data () {
  return {
      // Всего слайдов
      sliderAllCount: 0,
      // Номер активного слайда
      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      // Список изображений
      sliderList: [
        {img: 'https://dummyimage.com/wsvga'},
        {img: 'https://dummyimage.com/wsvga'},
        {img: 'https://dummyimage.com/wsvga'},
        {img: 'https://dummyimage.com/wsvga'}      
      ]
    }
},


methods: {
  // Иницилизация слайдера
  initSlider: function () {
    // Получаем элементы сладера и его слайдов
    let sliderBody = this.$el.querySelector('.js-slider')
    let sliderSlidies = sliderBody.querySelectorAll('.js-slide')
    // Записываем длину одного слайда для перелистывания
    this.sliderOffsetStep = sliderBody.clientWidth
    // Общее количество слайдов для стопов
    this.sliderAllCount = sliderSlidies.length
  },

  // ....
}

// Открыть нужный слайд
openSlide: function (id) {
  if (id > 0 && id <= this.sliderAllCount) {
    this.sliderActive = id
    // Сдвигаем элемент со слайдами
    this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)
  }
},