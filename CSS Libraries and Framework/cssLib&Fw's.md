# CSS Сангууд болон Фреймворкуудын Тойм

## CSS Фреймворкууд

* **CSS фреймворкууд**: CSS фреймворкууд нь таны ажлын урсгалыг хурдасгах, вэбсайт даяар нэгдмэл харагдах байдлыг бий болгох, олон хөтөч дээр загварыг тогтвортой харагдуулах, мөн CSS кодыг илүү цэгцтэй байлгахад тусалдаг.
* **Алдартай CSS фреймворкууд**: Tailwind CSS, Bootstrap, Materialize, болон Foundation зэрэг нь алдартай CSS фреймворкуудын жишээ юм.
* **Боломжит сул талууд**:
  * Фреймворкоос өгөгдсөн CSS нь таны бичсэн CSS-тэй зөрчилдөж болзошгүй.
  * Таны вэбсайт ижил фреймворк ашигладаг бусад сайтуудтай төстэй харагдаж магадгүй.
  * Томоохон фреймворкууд нь гүйцэтгэлийн асуудал үүсгэж болзошгүй.

## CSS Фреймворкуудын Хоёр Төрөл

* **Utility-first CSS фреймворкууд**: Эдгээр фреймворкууд нь margin, padding эсвэл дэвсгэр өнгө тохируулах зэрэг тодорхой зорилго бүхий жижиг классуудтай байдаг. Та эдгээр жижиг классуудыг HTML элементүүдэд шууд оноож өгөх боломжтой. Tailwind CSS нь utility-first CSS фреймворк ангилалд багтдаг.

Tailwind CSS ашиглан товчлуурын загвар гаргах жишээ энд байна.

```html
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">
  Button
</button>
```

* **Component-based CSS фреймворкууд**: Эдгээр фреймворкууд нь вэбсайтдаа нэмэх боломжтой, урьдчилан тодорхойлсон загвар бүхий бэлэн бүрэлдэхүүн хэсгүүдтэй (components) байдаг. Бүрэлдэхүүн хэсгүүд нь CSS фреймворкийн албан ёсны баримт бичигт байдаг бөгөөд та тэдгээрийг төсөл рүүгээ хуулж тавих боломжтой. Bootstrap нь component-based CSS фреймворк ангилалд багтдаг.

Bootstrap ашиглан жагсаалтын бүлэг (list group) үүсгэх жишээ энд байна. HTML элементүүдэд жижиг классууд оноохын оронд та HTML бүтцийг багтаасан бүхэл бүтэн бүрэлдэхүүн хэсгийг нэмэх болно.

```html
<div class="card" style="width: 25rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">HTML</li>
    <li class="list-group-item">CSS</li>
    <li class="list-group-item">JavaScript</li>
  </ul>
</div>
```

## Tailwind CSS

Tailwind бол utility-first CSS фреймворк юм. Өөрийн CSS дүрмүүдийг бичихийн оронд та жижиг utility классуудыг HTML дээрээ шууд хослуулан загвараа бүтээдэг.

### Responsive Дизайны Utility-ууд

Tailwind нь `sm:`, `md:`, болон `lg:` зэрэг угтваруудыг ашиглан дэлгэцийн өөр өөр хэмжээнд загвар оноодог.

```html
<div class="w-full md:w-1/2 lg:flex-row">Responsive layout</div>
```

### Flexbox Utility-ууд

`flex`, `flex-col`, `justify-around`, болон `items-center` зэрэг классууд нь уян хатан бүтэц (layout) үүсгэхийг хялбар болгодог.

```html
<div class="flex flex-col md:flex-row justify-around items-center">
  <p>Column on small screens</p>
  <p>Row on medium and larger screens</p>
</div>
```

### Grid Utility-ууд

Tailwind-д `grid`, `grid-cols-1`, болон `md:grid-cols-3` зэрэг CSS Grid-д зориулсан utility-ууд багтдаг.

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div class="bg-gray-100 p-4">Column 1</div>
  <div class="bg-gray-100 p-4">Column 2</div>
  <div class="bg-gray-100 p-4">Column 3</div>
</div>
```

### Зайн (Spacing) Utility-ууд

`mt-8`, `mx-auto`, `p-4`, болон `gap-4` зэрэг utility-ууд нь CSS бичихгүйгээр жигд зайг бий болгоход тусалдаг.

```html
<div class="mt-8 p-4 bg-indigo-600 text-white">Spaced content</div>
```

### Типографийн Utility-ууд

`uppercase`, `font-bold`, `font-semibold`, болон `text-4xl` зэрэг utility-ууд нь текстийн харагдах байдлыг удирддаг.

Та `text-3xl` `md:text-5xl` гэх мэтээр дэлгэцийн хэмжээнээс хамааран өөрчлөгдөх фонтын хэмжээг тохируулж болно.

```html
<h1 class="text-3xl md:text-5xl font-semibold text-center">Responsive Heading
</h1>
```

### Өнгө болон Hover Төлөвүүд

Tailwind нь `text-red-700`, `bg-indigo-600`, болон `bg-gray-100` зэрэг өргөн сонголттой өнгөний палитрыг санал болгодог.

`hover:bg-pink-600` зэрэг классууд нь интерактив эффектийг хялбар болгодог.

```html
<a href="#" class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">
  Hover Me
</a>
```

### Хүрээ, Ring болон Эффектүүд

* **Хүрээ (Borders)**: `border-2 border-red-300` нь тодорхой зузаан болон өнгө бүхий хүрээ нэмдэг.
* **Rings**: `ring-1 ring-gray-300` нь focus эсвэл картанд ихэвчлэн ашиглагддаг тойм (outline) шиг эффектийг үүсгэдэг.
* **Дугуйрсан өнцөг болон масштаб**: `rounded-md`, `rounded-xl`, болон `scale-105` зэрэг классууд нь загварыг илүү цэгцтэй болгодог.

```html
<div class="p-6 rounded-xl ring-2 ring-fuchsia-500 scale-105">
  Highlighted card
</div>
```

### Градиентууд

Tailwind нь `bg-gradient-to-r from-fuchsia-500 to-indigo-600` зэрэг градиент utility-уудыг дэмждэг.

```html
<div class="p-4 text-white bg-gradient-to-r from-fuchsia-500 to-indigo-600">
  Gradient background
</div>
```

## CSS Препроцессорууд

* **CSS препроцессор**: CSS препроцессор нь стандарт CSS-ийг өргөтгөдөг хэрэгсэл юм. Энэ нь өргөтгөсөн синтакс бүхий кодыг энгийн CSS файл руу хөрвүүлдэг. Энэ нь нарийн төвөгтэй төслүүдэд зориулж илүү цэвэр, дахин ашиглах боломжтой, давхардал багатай, өргөтгөх боломжтой CSS бичихэд тустай байж болно.
* **Онцлогууд**: CSS препроцессоруудын санал болгодог зарим онцлогууд нь хувьсагч (variables), mixins, үүрлэх (nesting), болон селектор удамшил (selector inheritance) юм.
* **Алдартай CSS препроцессорууд**: Sass, Less, болон Stylus нь алдартай CSS препроцессорууд юм.
* **Боломжит сул талууд**:
  * CSS дүрмүүдийг стандарт CSS руу хөрвүүлэх нь нэмэлт ачаалал үүсгэж болзошгүй.
  * Хөрвүүлсэн кодыг дибаг хийхэд хэцүү байж магадгүй.

## Sass

* **Sass**: Энэ бол хамгийн алдартай CSS препроцессоруудын нэг юм. Sass гэдэг нь "Syntactically Awesome Style Sheets" гэсэн үгний товчлол юм.
* **Sass-ийн дэмждэг онцлогууд**: Sass нь хувьсагч, үүрлэсэн CSS дүрмүүд, модулиуд, mixins, удамшил, болон үндсэн математик үйлдлүүдэд зориулсан операторууд зэрэг онцлогуудыг дэмждэг.

## Sass-ийн Дэмждэг Хоёр Синтакс

* **SCSS синтакс**: SCSS (Sassy CSS) нь CSS-ийн үндсэн синтаксийг өргөтгөдөг. Энэ нь Sass-ийн хамгийн өргөн хэрэглэгддэг синтакс юм. SCSS файлууд нь `.scss` өргөтгөлтэй байдаг.

SCSS дээр хувьсагч тодорхойлж, ашиглах жишээ энд байна.

```scss
$primary-color: #3498eb;

header {
  background-color: $primary-color;
}
```

* **Доголтой (Indented) синтакс**: Доголтой синтакс нь Sass-ийн анхны синтакс байсан бөгөөд "Sass синтакс" гэж нэрлэгддэг.

Доголтой синтакс дээр хувьсагч тодорхойлж, ашиглах жишээ энд байна.

```sass
$primary-color: #3498eb

header
  background-color: $primary-color
```

### Mixins

* **Mixins**: Mixins нь олон CSS шинж чанар болон тэдгээрийн утгуудыг нэг нэр дор бүлэглэж, тэр CSS кодын блокийг загварын хуудас (stylesheet) даяар дахин ашиглах боломжийг олгодог.

SCSS синтакс дээр mixin тодорхойлох жишээ энд байна. Энэ тохиолдолд mixin-ийг `center-flex` гэж нэрлэсэн байна. Энэ нь flexbox ашиглан элементүүдийг төвлөрүүлэх гурван CSS шинж чанартай.

```scss
@mixin center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Таны тодорхойлсон mixin-ийг ашиглах жишээ энд байна.

```scss
section {
  @include center-flex;
  height: 500px;
  background-color: #3289a8;
}
```
