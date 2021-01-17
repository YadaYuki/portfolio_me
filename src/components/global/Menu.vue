<template>
  <div class="menu_wrapper">
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle"></label>
    <ul id="menu">
      <li><router-link to="/work">Work</router-link></li>
      <li><router-link to="/">Profile</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <!-- <li><router-link to="/">Home</router-link></li> -->
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);
@mixin menuitem_style {
  margin: 75px 0 -55px 0;
  color: #fff;
  font: 14pt "Roboto", sans-serif;
  font-weight: 700;
  line-height: 4;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  list-style: none;
  transition: 0.5s ease;
  outline: 0;
}

@mixin menubar_style {
  position: fixed;
  top: 25px;
  right: 25px;
  background: #fff;
  width: 30px;
  height: 5px;
  transition: 0.2s ease;
  cursor: pointer;
  z-index: 11;
}

a:hover,
a:focus {
  color: #333;
}
a {
  padding: 5px 80px;
  @include menuitem_style();
}

li {
  @include menuitem_style();
  opacity: 0;
}

label {
  @include menubar_style();
}
label:before {
  @include menubar_style();
  position: absolute;
  content: "";
  top: 10px;
  left: 0;
}
label:after {
  @include menubar_style();
  position: absolute;
  content: "";
  top: 20px;
  left: 0;
}
#menu-toggle:checked + label {
  height: 0;
}

#menu-toggle:checked + label:before {
  width: 40px;
  transform: rotate(45deg) translateX(-5px);
  transition: transform 0.2s ease;
}
/* メニューの上 */
#menu-toggle:checked + label:after {
  width: 40px;
  /* TODO:なぜ,3.5pxにしたのか. */
  top: 3.5px;
  transform: rotate(-45deg) translateX(-5px);
  transition: transform 0.2s ease;
}

#menu {
  position: fixed;
  right: 0;
  top: 0;
  width: 110px;
  height: 110px;
  background-color: #1af6c2;
  border-bottom-left-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  transition: 0.5s ease;
  z-index: 10;
}

#menu-toggle:checked + label + #menu {
  animation: checked-anim-wrapper 1s ease both;
  z-index: 10;
}
#menu-toggle:not(:checked) + label + #menu li {
  // cursorがあたったときに,矢印から手に変化しないようにする
  pointer-events: none;
  opacity: 0;
  z-index: -1;
}
#menu-toggle:checked + label + #menu li {
  animation: checked-anim-text 1s ease both;
}
@keyframes checked-anim-text {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes checked-anim-wrapper {
  50% {
    width: 2000px;
    height: 2000px;
    z-index: 10;
  }
  100% {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  display: none;
}
</style>
<script>
export default {
  name: "Menu",
};
</script>