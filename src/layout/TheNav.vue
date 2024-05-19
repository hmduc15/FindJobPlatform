<template>
  <nav class="d-flex justify-content-between nav-top width-100">
    <div class="d-flex nav-left align-items-center">
      <div class="img-company">
        <img src="../assets/img/logo.png" />
      </div>
      <div class="nav-menu">
        <ul class="nav-menu-list d-flex">
          <router-link
            v-for="(menu, index) in listMenu"
            :key="index"
            :to="menu.to"
          >
            <li class="nav-menu-item f-size-18 f-w-600">
              {{ menu.text }}
              <div
                v-if="menu?.child?.length > 0"
                class="nav-menu-dropdown d-flex"
              >
                <!-- <ul class="menu-dropdown-list">
                  <router-link class="menu-dropdown-link d-flex align-items-center" v-for="(item, index) in menu.child"
                    :class="[{ 'line-border': isAddBorder(item, menu.child) }]" :key="index" :to="item.to">
                    <font-icon class="icon" v-if="item.icon" :icon="item.icon" />
                    <li class="menu-dropdown-item">
                      {{ item.text }}
                    </li>
                  </router-link>
                </ul> -->
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="d-flex justify-content-center nav-right">
      <m-button
        class="btn btn-login-out d-block"
        type="button"
        content="Login / Register"
        icon="fa-regular fa-user"
      >
        <template #icon>
          <p>icon</p>
        </template>
      </m-button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {
      listMenu: [
        {
          text: "Việc làm",
          to: "/jobs",
          child: [
            {
              text: "Việc làm phù hợp",
              to: "/jobs/for-you",
              icon: "check-to-slot",
              group: 2,
            },
            {
              text: "Việc làm đã ứng  tuyển",
              icon: "paper-plane",
              to: "/jobs/apply",
              group: 2,
            },
            {
              text: "Việc làm đã ứng  tuyểns",
              icon: "paper-plane",
              to: "/jobs/apply",
              group: 3,
            },
          ],
        },
        {
          text: "Hồ sơ",
          to: "/cv",
          // child: [
          //   {
          //     text: "Quản lý CV",
          //     to: "/cv",
          //     group: 1,
          //   },
          //   {
          //     text: "Mẫu CV",
          //     to: "/cv-template",
          //     group: 2,
          //   }
          // ]
        },
        {
          text: "Công ty",
          to: "/company",
          // child: [
          //   {
          //     text: "Danh sách công ty",
          //     to: "/top-company",
          //     group: 1
          //   },
          //   {
          //     text: "Danh sách công ty",
          //     to: "/company",
          //     group: 1
          //   }
          // ]
        },
        {
          text: "Ứng viên",
          to: "/tool",
          // child: [
          //   {
          //     text: "Tính thuế thu nhập cá nhân",
          //     to: "/calculator-tax",
          //   }
          // ]
        },
      ],
    };
  },
  props: [],

  computed: {
    /**
     * Biến kiểm tra xem có add border cho item menu ở dropdown hay không
     */
    isAddBorder() {
      return (item, menu) => {
        var indexItem = menu.findIndex((x) => x.text === item.text);

        // case menu có 1 item thì không add Border
        if (menu.length === 1) {
          return false;
        }
        // nhóm các item có group vào cùng 1 mảng
        var groupItems = menu.reduce((acc, currentItem) => {
          var group = currentItem?.group;

          if (!acc[group]) {
            acc[group] = [];
          }
          acc[group].push(currentItem);

          return acc;
        }, {});

        var resultArray = Object.values(groupItems);

        // nếu như chỉ có 1 group thì k add border
        if (resultArray.length == 1) {
          return false;
        } else {
          for (var i = 0; i < resultArray.length; i++) {
            var existItemGroup = resultArray[i].filter(
              (x) => x.group === item.group
            );

            if (existItemGroup.length === 0) {
              continue;
            }

            if (existItemGroup.length > 1) {
              var lastItem = resultArray[i][resultArray[i].length - 1];

              //  Nếu như item đó là item cuối của groupItem thì k add border
              // Xem lại đoạn này
              if (
                lastItem.text === item.text &&
                indexItem < resultArray[i].length
              ) {
                return true;
              }
              return false;
            }

            // nếu chỉ có 1 group giống nhau thì add border
            if (existItemGroup.length === 1 && i < resultArray.length - 1) {
              return true;
            } else {
              return false;
            }
          }
        }
      };
    },
  },

  methods: {},
};
</script>

<style language="scss" scoped>
.btn-login-out {
  background-color: transparent;
  color: #1f86ef;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 30px;
  transition: all ease 0.5s;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.btn-login-out:before {
  position: absolute;
  content: "";
  background-color: #202124;
  height: 100%;
  width: 0%;
  border-radius: 0 5px 5px 0;
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  bottom: 0;
  right: 0;
  transition: all ease 0.5s;
  z-index: -1;
}

.btn-login-out::after {
  position: absolute;
  content: "";
  background-color: #1f86ef;
  height: 100%;
  width: 0%;
  border-radius: 5px 0 0 5px;
  -webkit-clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  top: 0;
  left: 0;
  transition: all ease 0.5s;
  z-index: -1;
}

.btn-login-out:hover:before {
  width: 60%;
  height: 100%;
}

.btn-login-out:hover:after {
  width: 60%;
  height: 100%;
}

.btn-login-out:hover {
  color: #fff;
}

.btn-login-out:hover > .icon {
  color: #fff;
}
</style>
