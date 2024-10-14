function windowScroll() {
  var e = document.getElementById("navbar-custom");
  50 <= document.body.scrollTop || 50 <= document.documentElement.scrollTop
    ? e?.classList.add("nav-sticky")
    : e?.classList.remove("nav-sticky");
}
feather.replace(),
  window.addEventListener("scroll", (e) => {
    e.preventDefault(), windowScroll();
  });
var triggerTabList = [].slice.call(document.querySelectorAll("#tab-menu a")),
  collapses =
    (triggerTabList.forEach(function (e) {
      var t = new bootstrap.Tab(e);
      e.addEventListener("click", function (e) {
        e.preventDefault(),
          t.show(),
          document.body.classList.remove("enlarge-menu");
      });
    }),
    document.querySelectorAll(".navbar-nav .collapse"));
collapses.forEach((t) => {
  var a = new bootstrap.Collapse(t, { toggle: !1 });
  t.addEventListener("show.bs.collapse", (e) => {
    e.stopPropagation();
    e = t.parentElement.closest(".collapse");
    null != e &&
      e.querySelectorAll(".collapse").forEach((e) => {
        e = bootstrap.Collapse.getInstance(e);
        e !== a && e.hide();
      });
  }),
    t.addEventListener("hide.bs.collapse", (e) => {
      e.stopPropagation(),
        t.querySelectorAll(".collapse").forEach((e) => {
          bootstrap.Collapse.getInstance(e).hide();
        });
    });
});
try {
  document.getElementById("togglemenu").addEventListener("click", function (e) {
    e.preventDefault(), document.body.classList.toggle("enlarge-menu");
  });
} catch (e) {}
window.screen.width < 1025
  ? document
      .getElementsByTagName("body")[0]
      .classList.add("enlarge-menu", "enlarge-menu-all")
  : window.screen.width < 1340 &&
    (document
      .getElementsByTagName("body")[0]
      .classList.remove("enlarge-menu-all"),
    document.getElementsByTagName("body")[0].classList.add("enlarge-menu")),
  window.addEventListener("resize", function () {
    window.screen.width < 1025
      ? document
          .getElementsByTagName("body")[0]
          .classList.add("enlarge-menu", "enlarge-menu-all")
      : window.screen.width < 1340 &&
        (document
          .getElementsByTagName("body")[0]
          .classList.remove("enlarge-menu-all"),
        document.getElementsByTagName("body")[0].classList.add("enlarge-menu"));
  }),
  document.querySelectorAll(".leftbar-tab-menu a").forEach(function (e, t) {
    var a,
      n,
      o = window.location.href.split(/[?#]/)[0];
    e.href == o &&
      (e.classList.add("active"),
      e.parentElement.parentElement.classList.contains("navbar-nav") ||
        ((o = e.closest(".collapse")) &&
          (o.classList.add("show"),
          (a = o.parentElement.querySelector("a")).classList.remove(
            "collapsed"
          ),
          a.setAttribute("aria-expanded", "true"),
          (a = o.parentElement.closest(".collapse")) &&
            (a.classList.add("show"),
            a.parentElement.querySelector("a").classList.remove("collapsed"),
            a.parentElement.childNodes[1].setAttribute(
              "aria-expanded",
              "true"
            )))),
      (n = e.closest(".tab-pane")) &&
        (n.classList.add("active"),
        document.querySelectorAll("a").forEach(function (e, t) {
          e.href.includes(n.id) && e.classList.add("active");
        })));
  });
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  ),
  tooltipList = tooltipTriggerList.map(function (e) {
    return new bootstrap.Tooltip(e);
  }),
  dropdowns = document.querySelectorAll(
    ".dropup, .dropend, .dropdown, .dropstart"
  ),
  events = ["click"];
function toggleDropdown(e, t) {
  var a,
    n = t.closest(".dropdown-menu");
  n &&
    (e.preventDefault(),
    e.stopPropagation(),
    (a = t.querySelector(".dropdown-menu")),
    (e = n.querySelectorAll(".dropdown-menu")),
    [].forEach.call(e, function (e) {
      e !== a && e.classList.remove("show");
    }),
    a.classList.add("show"));
}
function hideDropdowns(e) {
  e = e.querySelector(".dropdown-menu").querySelectorAll(".dropdown-menu");
  e &&
    [].forEach.call(e, function (e) {
      e.classList.remove("show");
    });
}
function toggleMenu() {
  document.getElementById("mobileToggle").classList.toggle("open");
  var e = document.getElementById("navigation");
  "block" === e.style.display
    ? (e.style.display = "none")
    : (e.style.display = "block");
}
function activateMenu() {
  var e = document.getElementsByClassName("sub-menu-item");
  if (e) {
    for (var t, a, n = null, o = 0; o < e.length; o++)
      e[o].href === window.location.href && (n = e[o]);
    n &&
      (n.classList.add("active"),
      (t = getClosest(n, "li")) && t.classList.add("active"),
      (t = getClosest(n, ".parent-menu-item"))
        ? (t.classList.add("active"),
          (a = t.querySelector(".menu-item")) && a.classList.add("active"),
          (a = getClosest(t, ".parent-parent-menu-item")) &&
            a.classList.add("active"))
        : (a = getClosest(n, ".parent-parent-menu-item")) &&
          a.classList.add("active"));
  }
}
[].forEach.call(dropdowns, function (t) {
  var e = t.querySelector('[data-bs-toggle="dropdown"]');
  e
    ? e.addEventListener(events[0], function (e) {
        toggleDropdown(e, t);
      })
    : hideDropdowns(t);
}),
  document.querySelectorAll(".menu-body a").forEach(function (e, t) {
    var a = window.location.href.split(/[?#]/)[0];
    const n = e;
    e.href == a &&
      (n.classList.add("active"),
      n.parentNode.classList.add("menuitem-active"),
      n.parentNode
        .querySelector(".nav-link")
        ?.setAttribute("aria-expanded", "true"),
      n.parentNode.parentNode.parentNode.classList.add("show"),
      n.parentNode.parentNode.parentNode.parentNode.classList.add(
        "menuitem-active"
      ),
      n.parentNode.parentNode.parentNode.parentNode
        .querySelector(".nav-link")
        ?.setAttribute("aria-expanded", "true"),
      "sidebar-menu" !==
        (e =
          n.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode).getAttribute("id") && e.classList.add("show"),
      n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
        "menuitem-active"
      ),
      n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .querySelector(".nav-link")
        ?.setAttribute("aria-expanded", "true"),
      (a =
        n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
          .parentNode.parentNode.parentNode) &&
        a instanceof HTMLElement &&
        "wrapper" !== a.getAttribute("id") &&
        a.classList.add("show"),
      (e =
        (e =
          n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.parentNode.parentNode) && e.parentNode) &&
        e.classList.add("menuitem-active"));
  }),
  document.querySelectorAll("#navigation").length &&
    (document.querySelectorAll("#navigation li a").forEach(function (e, t) {
      var a = window.location.href.split(/[?#]/)[0];
      if (e.href == a) {
        const r = e;
        r.classList.add("active");
        for (var n = r.getAttribute("aria-labelledby"); ; ) {
          var o = document.querySelector("#" + n);
          if (
            (o?.classList.add("active"),
            (n = o?.getAttribute("aria-labelledby")),
            o?.setAttribute("aria-expanded", "true"),
            !n)
          )
            break;
        }
        r.parentNode.parentNode.classList.add("active"),
          r.parentNode.parentNode.parentElement
            .querySelector(".nav-link")
            ?.classList.add("active"),
          r.parentNode.parentNode.parentNode.parentNode.classList.add("active"),
          r.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
            "active"
          );
      }
    }),
    document
      .querySelector(".navbar-toggle")
      .addEventListener("click", function (e) {
        e.target.classList.toggle("open");
      }));

      document.addEventListener('DOMContentLoaded', (event) => {
        const inputs = document.querySelectorAll('.otp-input');
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
    
            input.addEventListener('keydown', (e) => {
                // Allow only numbers and certain control keys
                if (!/^[0-9]$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                    e.preventDefault();
                }
                
                if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
                    inputs[index - 1].focus();
                }
            });
        });
    });
    

    document.getElementById("fullscreen-btn").addEventListener("click", function(event) {
      event.preventDefault();
      let elem = document.documentElement;
  
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
          elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
          elem.msRequestFullscreen();
      }
  });

function validatePincode(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/\D/g, '');
    if (input.value.length > 6) {
        input.value = input.value.slice(0, 6); // Truncate to 10 digits
    }
    if (input.value.length < 6) {
        $('#pincode').text('Enter 6 Digits');
    }
    if (input.value.length == 6) {
        $('#pincode').text('');
    }
}

function validateNumber(input) {
  // Remove non-numeric characters
  input.value = input.value.replace(/\D/g, '');
}
        function validateMobile(input) {
            // Remove non-numeric characters
            input.value = input.value.replace(/\D/g, '');
            if (input.value.length > 10) {
                input.value = input.value.slice(0, 10); // Truncate to 10 digits
            }
            if (input.value.length < 10) {
                $('#mobile_number').text('Enter 10 Digits');
            }
            if (input.value.length == 10) {
                $('#mobile_number').text('');
            }
        }
        
        document.getElementById('toggle-password-visibility').addEventListener('click', function () {
          var passwordField = document.getElementById('password');
          var toggleIcon = document.getElementById('toggle-icon');
      
          // Toggle the type attribute of the password field
          if (passwordField.type === 'password') {
              passwordField.type = 'text';
              toggleIcon.classList.remove('fa-eye');
              toggleIcon.classList.add('fa-eye-slash');
          } else {
              passwordField.type = 'password';
              toggleIcon.classList.remove('fa-eye-slash');
              toggleIcon.classList.add('fa-eye');
          }
      });