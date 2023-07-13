<template>
  <!-- Breakdown Components as deemed fit -->
  <div class="form_wrapp">
    <div class="form_header">
      <div class="form_caption">
        <h2>طلب تبرع جديد</h2>
        <!-- <p>سيتم التواصل معك من قبل المندوب لتأكيد موعد الاستلام</p> -->
      </div>
      <span class="icon_view">
        <svg
          width="21px"
          height="24px"
          viewBox="0 0 21 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Website"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Landing-Page"
              transform="translate(-203.000000, -283.000000)"
              stroke="#FFFFFF"
            >
              <g id="Group-12" transform="translate(160.000000, 229.000000)">
                <g id="Group-4" transform="translate(34.000000, 46.000000)">
                  <g id="Group-2" transform="translate(9.000000, 8.000000)">
                    <rect
                      id="Rectangle"
                      x="1"
                      y="3.5"
                      width="16"
                      height="20"
                      rx="2"
                    ></rect>
                    <rect
                      id="Rectangle-Copy"
                      fill="#008451"
                      x="4"
                      y="0.5"
                      width="16"
                      height="20"
                      rx="2"
                    ></rect>
                    <path
                      d="M6,4.52112117 C7.33333333,4.50704039 8.66666667,4.49295961 10,4.47887883"
                      id="Path"
                    ></path>
                    <polyline
                      id="Path-2"
                      points="6 4.5 6.57022977 4.5 6.5966034 4.5 6.65414585 4.5 7.42017982 4.5 7.44375624 4.5 7.5016983 4.5 7.5976024 4.5 7.65594406 4.5 7.71388611 4.5 7.80979021 4.5 7.83616384 4.5 7.89450549 4.5 7.94725275 4.5 7.97362637 4.5 8 4.5"
                    ></polyline>
                    <path
                      d="M6,6.63627492 C9.66666667,6.54542497 13.3333333,6.45457503 17,6.36372508"
                      id="Path-3"
                    ></path>
                    <path
                      d="M6,8.40111191 C10,8.26416188 14,8.73583812 18,8.59888809"
                      id="Path-4"
                    ></path>
                    <polyline
                      id="Path-5"
                      points="6 11.5 14.5111097 11.5 15.9211572 11.5 15.9609044 11.5 16 11.5"
                    ></polyline>
                    <polyline
                      id="Path-6"
                      points="6 13.5 7.18642091 13.5 10.0013999 13.5 10.9241717 13.5 11 13.5"
                    ></polyline>
                    <polyline
                      id="Path-7"
                      points="6 13.5 6.7901569 13.5 7.21966362 13.5 9.08443391 13.5 9.85370809 13.5 10.0501185 13.5 10.185574 13.5 10.3825488 13.5 10.5180043 13.5 11 13.5"
                    ></polyline>
                    <polyline
                      id="Path-8"
                      points="6 16.5 10.7195019 16.5 16 16.5"
                    ></polyline>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
    </div>
    <div class="form_body">
      <b-form ref="signup_modal" @submit.prevent="registerCustomer">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="الاسم"
            v-model="newCustomer.name"
            required
          />
        </div>
        <!-- <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="اسم االمستخدم"
            v-model="newCustomer.username"
            required
          />
          <small class="text-danger" v-if="errors.username">{{
            errors.username
          }}</small>
        </div> -->
        <div class="form-group">
          <VuePhoneNumberInput
            v-model="newCustomer.phone"
            @update="onUpdate"
            default-country-code="SA"
            :only-countries="['SA']"
            required
          />
          <small class="text-danger" v-if="errors.phone">{{
            errors.phone
          }}</small>
        </div>
        <!-- <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="رقم الجوال"
            v-model="newCustomer.email"
            required
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div> -->
        <!-- <div class="input-group">
          <input
            type="password"
            class="form-control"
            placeholder="أدخل كلمة المرور"
            v-model="newCustomer.password"
            required
          />
          <i class="fas fa-eye-slash" @click="togglePasswordVisibility"></i
          >
        </div> -->
        <!-- <div class="input-group" v-else>
          <input
            type="text"
            class="form-control"
            placeholder="أدخل كلمة المرور"
            v-model="newCustomer.password"
          />
          <i class="fas fa-eye" @click="togglePasswordVisibility"></i
          >
        </div> -->
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="المدينة"
            v-model="newCustomer.city"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="اسم الحي"
            v-model="newCustomer.district"
            required
          />
        </div>
        
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="أقرب معلم - اسم الشارع"
            v-model="newCustomer.address"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">
            <span>إنشاءالطلب</span>
            <div
              class="spinner-border text-light ms-2"
              role="status"
              v-if="registerLoading"
            >
              <span class="visually-hidden"></span>
            </div>
            <span class="icon_" v-else>
              <svg
                width="35"
                height="22"
                viewBox="0 0 35 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 11.043H2"
                  stroke="#ffffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.0417 20.0833L2 11.0417L11.0417 2"
                  stroke="#ffffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <!-- <p v-if="signuppage">
            لديك طلب قائم؟
            <span>تابع حالة طلبك من خلال هذا الرابط</span>
          </p> -->
          <p>يمكنك تحديد اليوم بعد الضغط على إنشاء الطلب</p>
        </div>
      </b-form>
    </div>

    <!-- Task Modal -->
    <b-modal
      ref="task_modal"
      content-class="side_modal"
      left
      hide-footer
      hide-header
    >
      <div class="modal__container">
        <div class="row justify-content-between">
          <div class="col-md-6 text-left">
            <img
              style="cursor: pointer"
              @click="hideTaskModal"
              height="20"
              width="20"
              src="../assets/img/close.png"
              alt="Close icon"
            />
          </div>
          <div class="col-md-6">
            <h4>طلب تبرع جديد</h4>
          </div>
        </div>
        <div class="section_info">
          <div class="card_info info">
            <p>{{ customer.name }}</p>
            <p>{{ this.formattedPhone }}</p>
            <p>{{ customer.address }}</p>
            <p>{{ customer.email }}</p>
          </div>
          <!-- <p class="info_part">سيتم التواصل معك من قبل المندوب لتأكيد موعد الاستلام</p> -->
        </div>

       
        <button
          class="btn btn-green btn-block"
          type="submit"
          v-if="taskLoading"
        >
          <span>جار التحميل</span>
          <div class="spinner-border text-light ms-2" role="status">
            <span class="visually-hidden"></span>
          </div>
        </button>
        <button class="btn btn-green btn-block" @click="createtask" v-else>
          <span class="cta-text">ارسال الطلب</span>
          <span class="check_">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </b-modal>

  </div>
</template>

<script>
// import VueGoogleAutocomplete from "vue-google-autocomplete";
// import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";
import VuePhoneNumberInput from "vue-phone-number-input";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import eventHub from "../../eventBus";
// import $ from "jquery";

export default {
  components: {
    VuePhoneNumberInput,

    // VueTimepicker,
    // VueGoogleAutocomplete,
  },
  data() {
    return {
      selectedCard: {},
      checkedCard: false,
      successfulTask: false,
      loginLoading: false,
      updatePasswordLoading: false,
      taskLoading: false,
      registerLoading: false,
      customer: "",
      newCustomer: {
        name: "",
        username: "",
        password: "",
        phone: "",
        email: "",
        city: "",
        district: "",
        address: "",
        latitude: 0,
        longitude: 0,
      },
      returningCustomer: {
        latitude: "",
        longitude: "",
      },
      task: "",
      newTask: {},
      updatePassword: {
        password: "",
      },
      formattedPhone: "",
      returningCustomerFormattedPhone: "",
      passwordVisible: false,
      donations: "",
      availableDates: [],
      yourDaysArray: [
        {
          start_time: { HH: "08", mm: "00" },
          end_time: { HH: "09", mm: "00" },
        },
      ],
      errors: {},
      locationData: {},
      donationType: [],
      activeDonationType: false,
      selectedDonationCard: {},
      selectedDate: "",
      address: "",
      location: "",
      center: [0, 0],
      map: {},
      markerOption: {
        draggable: true,
        animation: 1,
      },
    };
  },
  computed: {
    options() {
      return {
        center: {
          lat: this.newCustomer.latitude,
          lng: this.newCustomer.longitude,
        },
        zoom: 12,
      };
    },
    position() {
      return {
        lat: this.newCustomer.latitude,
        lng: this.newCustomer.longitude,
      };
    },
    donationCard() {
      return this.donationType.filter((donation) => {
        if (this.selectedDonationCard.id == donation.id) {
          return donation.id;
        }
      });
    },
  },
  props: ["signuppage"],
  mounted() {
    this.getDonationsType();
    this.getCurrentLocation();
    // this.$modal.hide("success_modal");
  },
  created() {
    eventHub.$on("customChange", this.loginModalFunc);
  },
  methods: {
    // updateLocation(pos) {
    //   this.newCustomer.latitude = pos.lat;
    //   this.newCustomer.longitude = pos.lng;
    //   this.getCurrentAddress({ lat: pos.lat, lng: pos.lng });
    // },
    makeToast() {
      this.$bvToast.toast("عفوًا ... خطأ في إنشاء المهمة", {
        title: `خطأ`,
        variant: "danger",
        solid: true,
      });
    },
    showEvent(e) {
      console.log({ event: e });
    },
    checkDonationType() {},
    getAddressData(addressData, placeResultData) {
      this.newCustomer.address = placeResultData.formatted_address;
      this.newCustomer.latitude = addressData.latitude;
      this.newCustomer.longitude = addressData.longitude;
      this.center[0] = addressData.latitude;
      this.center[1] = addressData.longitude;
    },

    async updatePasswordFunc() {
      this.updatePasswordLoading = true;
      let url = `https://apiv1.kiswaksa.com/api/customer/update-password`;
      let payload = {};
      payload.email = this.customer.email;
      payload.new_password = this.updatePassword.passowrd;
      try {
        let res = await this.$http.post(url, payload);
        console.log({ PassWordUpdate: res });
        this.updatePasswordLoading = false;
      } catch (error) {
        console.log(error);
        this.updatePasswordLoading = false;
      }
    },
    loginModalFunc(value) {
      if (value == true) {
        this.$refs["login_modal"].show();
      }
    },
    result(e) {
      console.log({ e });
    },
    hideTaskModal() {
      this.$refs["task_modal"].hide();
    },

    async getCurrentLocation() {
      let res = await this.$getLocation();
      this.getCurrentAddress(res);
      console.log({ coordinates: res });
      this.newCustomer.latitude = res.lat;
      this.newCustomer.longitude = res.lng;
      this.returningCustomer.latitude = res.lat;
      this.returningCustomer.longitude = res.lng;
      this.center[0] = res.lat;
      this.center[1] = res.lng;
    },
    onUpdate(e) {
      console.log({ e });
      if (e.formattedNumber) {
        console.log({ phoneNumber: e.formattedNumber });
        this.formattedPhone = e.formattedNumber;
        // this.profile.phone = e.formattedNumber
      }
    },
    setDonationType(e, card) {
      this.selectedDonationCard = card;
      console.log({ donationType: this.donationType });
    },
    registerCustomer() {
      this.registerLoading = true;
      this.newCustomer.phone = this.formattedPhone;
      this.customer = this.newCustomer;
      localStorage.setItem("customer", this.newCustomer);
      this.getAvailableDates();
      this.$refs["task_modal"].show();
      setTimeout(() => {
        this.registerLoading = false;
      }, 3000);
    },
    async loginCustomer() {
      this.loginLoading = true;
      let url = `https://apiv1.kiswaksa.com/api/customer/login`;
      if (!this.returningCustomer.address) {
        this.returningCustomer.address = "Abu Dhabi";
      }

      this.returningCustomer.phone = this.returningCustomerFormattedPhone;
      let payload = {};
      payload.email = this.returningCustomerFormattedPhone;
      payload.password = this.returningCustomerFormattedPhone;
      try {
        let res = await this.$http.post(url, payload);
        console.log({ loginCustomer: res });
        this.customer = res.data.data.user;
        let token = res.data.data.token;

        localStorage.setItem("token", token);
        localStorage.setItem("customer", res.data.data.user);
        if (token) {
          this.getAvailableDates();
          this.createLocation(
            this.returningCustomer.address,
            this.returningCustomer.latitude,
            this.returningCustomer.longitude
          );
        }
        this.loginLoading = false;
        this.$refs["task_modal"].show();
        this.$refs["login_modal"].hide();
      } catch (error) {
        this.loginLoading = false;
        console.log(error);
      }
    },
    async createtask() {
      this.taskLoading = true;
     let url = `https://services.kiswaksa.com/api/task/create`;
      let payload = {};
      payload.name = this.newCustomer.name
      payload.phone = this.formattedPhone;
      payload.address ="الامارات العربية المتحدة - " + this.newCustomer.city + " - " + this.newCustomer.district + " - " + this.newCustomer.address;
      payload.country = "UAE";
      payload.created_by = "Website:Green-closet-ae";



      try {
        let res = await this.$http.post(url, payload);
        this.$refs["task_modal"].hide();
        this.$router.push("/success");
        this.newCustomer.name = "";
        this.newCustomer.phone = "";
        this.newCustomer.city = "";
        this.newCustomer.district = "";
        this.newCustomer.address = "";
        this.taskLoading = false;
        console.log(res);
      } catch (error) {
        this.taskLoading = false;
        this.$refs["task_modal"].hide();
        this.makeToast();
        this.newCustomer.name = "";
        this.newCustomer.phone = "";
        this.newCustomer.city = "";
        this.newCustomer.district = "";
        this.newCustomer.address = "";
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    async createLocation(address, latitude, longitude) {
      let url = `https://apiv1.kiswaksa.com/api/customer/locations`;
      let payload = { is_default: "1", title: "Home" };
      payload.address = address;
      payload.latitude = latitude;
      payload.longitude = longitude;
      try {
        let res = await this.$http.post(url, payload);
        this.locationData = res.data.data;
        localStorage.setItem("location", this.locationData);
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    async getDonationsType() {
      let url = `https://apiv1.kiswaksa.com/api/donation-types`;
      try {
        let res = await this.$http.get(url);
        this.donations = res.data.data.data;
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    async getAvailableDates() {
      let url = `https://apiv1.kiswaksa.com/api/web-dates?lat=${this.newCustomer.latitude}&lng=${this.newCustomer.longitude}`;
      try {
        let res = await this.$http.get(url);
        console.log({ AvailableDates: res });
        this.availableDates = res.data.data;
        this.availableDates.shift();
        localStorage.setItem("availableDates", this.availableDates);
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    togglePasswordVisibility() {
      !this.passwordVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.success-img {
  width: 80px;
  height: 80px;
}
.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  box-shadow: none !important;
}
.form_body {
  z-index: 1;
  p {
    margin: 10px 0;
    text-align: right;
    color: $text-color;
    font-weight: 500;
    a {
      color: $primary-color;
    }
  }
}
.map_ {
  .form-control {
    position: relative;
    z-index: 1;
  }
}
.map_wrapp {
  background: $shade;
  height: 145px;
  position: relative;
  top: -10px;
  border-radius: 0 0 9px 9px;
}
.form-group {
  p {
    span {
      color: $primary-color;
      cursor: pointer;
    }
  }
}
</style>