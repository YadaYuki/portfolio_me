<template>
  <div>
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle"></label>
    <ul id="menu">
      <li><router-link to="/work">Work</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="contact">Contact</router-link></li>
      <li><router-link to="/">Home</router-link></li>
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
    transition: .5s ease;
    outline: 0;
}

@mixin menubar_style {
    position: fixed;
    top: 25px;
    right: 25px;
    background: #fff;
    width: 30px;
    height: 5px;
    transition: .2s ease;
    cursor: pointer;
    z-index: 11;
}

a:hover,a:focus{
    color: #333;
}
a {
  padding: 5px 80px;
  @include menuitem_style();
}

li {
  @include menuitem_style();
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
  transition: transform .2s ease;
}
/* メニューの上 */
#menu-toggle:checked + label:after {
  width: 40px;
  /* TODO:なぜ,3.5pxにしたのか. */
  top: 3.5px;
  transform: rotate(-45deg) translateX(-5px);
  transition: transform .2s ease;
}

#menu {
    position: fixed;
    right:0;
    top:0;
    margin: 0; padding: 0;
    width: 110px;
    height: 110px;
    background-color: #1AF6C2;
    border-bottom-left-radius: 100%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);
    transition: .5s ease;
    z-index: 10;
}

#menu-toggle:checked + label + #menu {
  animation: checked-anim 1s ease both;
  z-index: 10;
}
#menu-toggle:not(:checked) + label + #menu li {
  pointer-events: none;
  opacity: 0;
  z-index: -1;
}
@keyframes checked-anim {
  50% {
    width: 5000px;
    height: 5000px;
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