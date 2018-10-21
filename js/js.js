$(document).ready(function(){
  $('.sl').slick({
		// Автоматическое перелистывание слайдов
		// autoplay:true,
		
		// Скорость прелистывания слайдов по умолчанию 3000(3сек)
		autoplaySpeed:3000,
		
		//Скорость движения слайдов по умолч 300
		// speed:3000,

		//Свойство анимации 'ease' - по умолчанию может быть 'ease-out','ease-in-out','linear'
		cssEase:'ease-in',
		// Размещение слайдов по центру с добавлением отступов
		// centerMode:true,
		
		// Контролирует отступы centerMode,по умолчанию 50px
		// centerPadding:'10px',
		
		// Включение точек для навигации
		dots:true,
		
		// Отключение стрелок навигации сбоку
		// arrows:false,
		
		// Анимация сменяющая скольжение на ==> затемнение,centerMode,centerPadding - отключаются
		// fade:true,
		
		// Откл перелистывание слайда мышью
		// draggable:false,

		// Откл.бесконечность слайдера(откл переход с 1го на последний и наоборот)
		// infinite:false,

		// Расстояние на которое можно отодвинуть последний слайд,по умолч 0.15(15%) работает только с infinite:false,
		// edgeFriction:0.5,
		
		//Ставит на паузу слайдв при наведении на навигацию(на точки внизу слайдов)
		pauseOnDotsHover:true,

		// Ленивая загрузка,картинки 'подгружаются',значения:'ondemand'(по умолч),'progressive'
		// lazyLoad:'ondemand',

		//С права на лево,первый сл в конце,последний в начале,тегу(sl) либо рудителю слайдера необходимо задать атрибут: dir='rtl'
		// rtl:true,

		// Вертикальное перелистывание слайдов
		// vertical:true,

		//Слайды идут в n строк(рядов).По умолчанию 1 строка
		// rows:3,

		//Количество слайдов в одной строке, работает с rows
		// slidesPerRow:3,

		//Количество слайдов в 1й строке
		// slidesToShow:3,

		//Количество проматываемых слайдов за раз.Необходимо отключить: centerMode,centerPadding ,для корректной работы
		slidesToScroll:1,

		//z-index (наложение поверх других элементов и наоборот), по умолчанию 1000 
		//z-index: 2000

		//Настройка поведения слайдера для разных размеров экрана
		//код ниже указан ка пример
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			arrows: false,
		// 			centerMode: true,
					// centerPadding: '40px',
		// 			slidesToShow: 3
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			arrows: false,
		// 			centerMode: true,
		// 			centerPadding: '40px',
		// 			slidesToShow: 1
		// 		}
		// 	}
		// ]




  });
});


// https://github.com/kenwheeler/slick/      Настройки слайдера