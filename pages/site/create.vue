<template>
<v-app id="inspire">
 <div>
    <h3>Create a Site</h3>
    <v-form>
    <v-card>
      <v-card-title>Site Identification</v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="3">
                <v-text-field
                        class="font-size"
                        minlength=25
                        maxlength=25
                        counter=25
                        label="Site Name"
                        :rules="siteNameRules"
                        v-model=siteName>
                </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-select
                    class="font-size"
                    :items="countries"
                    selected="BQ"
                    label="Country"
                    :rules="countryRules"
                    v-model="countryCode">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field
                        class="font-size"
                        dense
                        maxlength=10
                        counter=10
                        label="Beach Code"
                        :rules="beachCodeRules"
                        v-model=beachCode>
                </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                        class="font-size"
                        dense
                        maxlength=25
                        counter=25
                        label="Beach Name"
                        v-model=beachName
                        :rules="beachNameRules">
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-spacer></v-spacer>
    <v-card>
    <v-card-title>Beach Information</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
                <v-text-field
                            class="font-size"
                            dense
                            maxlength=4
                            counter=4
                            label="Width at mean spring low tide (M):"
                            type="number"
                            v-model=lowTideWidth>
                </v-text-field>
            </v-col>
            <v-col cols="4">
               <v-text-field
                            class="font-size"
                            dense
                            maxlength=4
                            counter=4
                            label="Width at mean spring high tide (M):"
                            type="number"
                            v-model=hiTideWidth></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
                <v-text-field
                              class="font-size"
                              dense
                              label="Total beach length (M):"
                              type="number"
                              counter=4
                              v-model=beachLength></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  class="font-size"
                  dense
                  label="Back of Beach (example dunes):"
                  v-model=beachBack
                  maxlength=50
                  ounter=50></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card>
    <v-card-title>GPS Information</v-card-title>
      <v-card-text>
        <v-container>
          <v-row justify="left">
            <v-col cols="3" class="font-size">
                <v-subheader>Coordinates Start 50M</v-subheader>
            </v-col>
            <v-col cols="1">
                <v-text-field class="font-size" dense v-model=startGPS></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Coordinates End 50M" v-model=endGPS ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Coordinates Quadrant 1" v-model=quadrant1 ></v-text-field>
            </v-col>
            <v-col cols="3">
               <v-text-field class="font-size" dense label="Coordinates Quadrant 2" v-model=quadrant2 ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Coordinates Quadrant 3" v-model=quadrant3 ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="3">
                <v-text-field class="font-size" dense label="Coordinates System Used" v-model=coordinationSystem ></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Date Measured" v-model=dateGPSPositionMeasured ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
     </v-card>
    <v-card>
    <v-card-title>Beach Stats</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
                <v-combobox class="font-size" :items="direction" multiple label="Prevailing currents off the beach" v-model="prevailingCurrent"></v-combobox>
            </v-col>
            <v-col cols="3">
                <v-combobox class="font-size" :items="direction" label="Prevailing winds" v-model="prevailingWinds"></v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
                <v-text-field class="font-size" dense label="When you look from the beach to the sea, what direction is the beach facing?" v-model=beachDirection></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="7">
                <v-text-field class="font-size" dense label="Type of beach material (% coverage, e.g.: 40% sand, 60% pebbles)" v-model=beachMaterial></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="3">
                <v-text-field class="font-size" dense label="Beach Slope (e.g. slope 20%)" v-model=beachTopography></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Beach Curvature" v-model=beachCurvature></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Horizontal Profile" v-model=horizontalBeachProfile></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="7">
                <v-text-field class="font-size" dense label="Are there any objects in the sea (e.g. a pier) that influence the currents?" v-model=seaObjects></v-text-field>
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="2">
                <v-text-field class="font-size" dense label="Major Beach Usage" v-model=majorUsage></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field class="font-size" dense label="Estimated # of person visits per year" v-model=beachVisitsPerYear></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Access to the Beach" v-model=beachAccess></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card>
    <v-card-title>Please use official data only for the following questions</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
                <v-text-field class="font-size" dense label="What is the distance to the nearest town:"  v-model=nearestTown></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="What is the position of the town in relation to the survey area:" v-model=townPosition></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="What is the (seasonal) population size of this town:"  v-model=townPopulation></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="Is there any development behind the beach:"  v-model=behindBeachDev></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field dense label="Are there food and / or drink outlets on the beach:"  v-model=foodOnBeach></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
                <v-text-field class="font-size" dense label="What is the distance from the survey are to the food / drink outlet (km):" v-model=foodDistance></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Present all year round:"  v-model=foodYearRound></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="Position of food / drink outlet in relation to the survey area:" v-model=foodPosition></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">
                <v-text-field class="font-size" dense label="What is the distance from the beach to the nearest shipping lane (km):"  v-model=nearestShippingLane></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="What is the estimated traffic density (# of ships per year):" v-model=shippingLaneDensity></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="Is it used mainly by merchant ships, fishing vessels, or all kinds:"  v-model=shippingLaneUse></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field class="font-size" dense label="Position in relation to the survey area:" v-model=shippingLanePosition></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="What is the distance from the beach to the nearest harbour:"  v-model=nearestHarbour></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
                <v-text-field class="font-size" dense label="What is the name of the harbour:" v-model=harbourName></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-text-field class="font-size" dense label="Type of harbor:"  v-model=harbourType></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Size of Harbour (# of ship):" v-model=harbourSize></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">
                <v-text-field class="font-size" dense label="What is the distance from the beach to the nearest river mouth (km):" v-model=riverDistance></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="What is the name of the river:"  v-model=riverName></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field class="font-size" dense label="Position of river mouth in relation to survey area:" v-model=harbourPosition></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">
                <v-text-field class="font-size" dense label="Is the beach located near a discharge or discharges of waste water:" v-model=nearDischarge></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
                <v-text-field class="font-size" dense label="What is the distance from the beach to discharge points:" v-model=dischargeDistance></v-text-field>
            </v-col>
            <v-col cols="">
                <v-text-field class="font-size" dense label="Position of discharge points in relation to survey area:" v-model=dischargePosition></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
                <v-text-field class="font-size" dense label="How often is the beach cleaned:" v-model=cleanedHowOften></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="All year around / seasonal:" v-model=cleanedYearRoundOrSeasonal></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="What method is used:" v-model=cleaningMethod></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
                <v-text-field class="font-size" dense label="Who's responsible for cleaning:" v-model=responsibleForCleaning></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7">
                <v-textarea class="font-size" dense label="Additional comments and observations about this beach:" v-model=additionalComments></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
                <v-text-field class="font-size" dense label="Is this an amendment to an existing questionnaire:" v-model=cleanedHowOften></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-menu
                v-model="fromDateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px">
              <template v-slot:activator="{ on }">
              <v-text-field
                label="Completed Date"
                readonly
                class=font-size
                :value="completedDateDisp"
                v-on="on"
              ></v-text-field>
              </template>
              <v-date-picker
                locale="en-in"
                v-model="dateCompleted"
                no-title
                @input="fromDateMenu = false"
                :min="minDate"
              ></v-date-picker>
            </v-menu>
            </v-col>
         </v-row>
         <v-row>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Name:" v-model=enteredBy></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Phone:" v-model=enteredByPhone></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-text-field class="font-size" dense label="Email:" :rules=emailRules v-model=enteredByEmail></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    </v-form>
    <v-btn
        @click="saveData"
        rounded
        color="primary"
        dark>Create Site
    </v-btn>
  </div>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      siteName: null,
      beachName: null,
      beachCode: null,
      countryCode: null,
      lowTideWidth: null,
      highTideWidth: null,
      beachLength: null,
      beachBack: null,
      startGPS: null,
      endGPS: null,
      quadrant1: null,
      quadrant2: null,
      quadrant3: null,
      coordinationSystem: null,
      dateGPSPositionMeasured: null,
      prevailingCurrent: null,
      prevailingWinds: null,
      beachDirection: null,
      beachMaterial: null,
      beachTopography: null,
      beachCurvature: null,
      horizontalBeachProfile: null,
      seaObjects: null,
      majorUsage: null,
      beachVisitsPerYear: null,
      beachAccess: null,
      nearestTown: null,
      townPosition: null,
      townPopulation: null,
      behindBeachDev: null,
      foodOnBeach: null,
      foodDistance: null,
      foodYearRound: null,
      foodPosition: null,
      nearestShippingLane: null,
      shippingLaneDensity: null,
      shippingLaneUse: null,
      shippingLanePosition: null,
      nearestHarbour: null,
      harbourName: null,
      harbourType: null,
      harbourSize: null,
      riverDistance: null,
      riverName: null,
      riverPosition: null,
      nearDischarge: null,
      dischargeDistance: null,
      dischargePosition: null,
      cleanedHowOften: null,
      cleanedYearRoundOrSeasonal: null,
      cleaningMethod: null,
      responsibleForCleaning: null,
      additionalComments: null,
      amendment: null,
      dateCompleted: null,
      enteredBy: null,
      enteredByPhone: null,
      enteredByEmail: null,
      countries: [
        { value: 'AW', text: 'Aruba' },
        { value: 'BQ', text: 'Bonaire, Sint Eustatius and Saba', selected: true },
        { value: 'CW', text: 'Curacao' }
      ],
      direction: [
        { value: 'N', text: 'North' },
        { value: 'E', text: 'South' },
        { value: 'S', text: 'East' },
        { value: 'W', text: 'West' }
      ],
      curvature: [
        { text: 'Concave' },
        { text: 'Convex' },
        { text: 'Sinusoidal' },
        { text: 'Straight' }
      ],
      profile: [
        { text: 'Linear' },
        { text: 'Concanve' },
        { text: 'Convex' },
        { text: 'Mixed' }
      ],
      siteNameRules: [
        v => !!v || 'Site Name is required',
        v => (v && v.length <= 26) || 'Site Name must 25 characters or less'
      ],
      beachNameRules: [
        v => !!v || 'Beach Name is required',
        v => (v && v.length <= 26) || 'Beach Name must 25 characters or less'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      beachCodeRules: [
        v => !!v || 'Beach Code is required',
        v => (v && v.length <= 11) || 'Beach Code must 10 characters or less'
      ],
      countryRules: [
        v => !!v || 'Country is required'
      ]
    }
  },
  computed: {
    completedDateDisp () {
      return this.dateCompleted
    }
  },
  methods: {
    saveData () {
      const newSite = {
        name: this.siteName,
        beachName: this.beachName,
        beachCode: this.beachCode,
        countryCode: this.countryCode,
        lowTideWidth: this.lowTideWidth,
        highTideWidth: this.highTideWidth,
        beachLength: this.beachLength,
        beachBack: this.beachBack,
        startGPS: this.startGPS,
        endGPS: this.endGPS,
        quadrant1: this.quadrant1,
        quadrant2: this.quadrant2,
        quadrant3: this.quadrant3,
        coordinationSystem: this.coordinationSystem,
        dateGPSPositionMeasured: this.dateGPSPositionMeasured,
        prevailingCurrent: this.prevailingCurrent,
        prevailingWinds: this.prevailingWinds,
        beachDirection: this.beachDirection,
        beachMaterial: this.beachMaterial,
        beachTopography: this.beachTopography,
        beachCurvature: this.beachCurvature,
        horizontalBeachProfile: this.horizontalBeachProfile,
        seaObjects: this.seaObjects,
        majorUsage: this.majorUsage,
        beachVisitsPerYear: this.beachVisitsPerYear,
        beachAccess: this.beachAccess,
        nearestTown: this.nearestTown,
        townPosition: this.townPosition,
        townPopulation: this.townPopulation,
        behindBeachDev: this.behindBeachDev,
        foodOnBeach: this.foodOnBeach,
        foodDistance: this.foodDistance,
        foodYearRound: this.foodYearRound,
        foodPosition: this.foodPosition,
        nearestShippingLane: this.nearestShippingLane,
        shippingLaneDensity: this.shippingLaneDensity,
        shippingLaneUse: this.shippingLaneUse,
        shippingLanePosition: this.shippingLanePosition,
        nearestHarbour: this.nearestHarbour,
        harbourName: this.harbourName,
        harbourType: this.harbourType,
        harbourSize: this.harbourSize,
        riverDistance: this.riverDistance,
        riverName: this.riverName,
        riverPosition: this.riverPosition,
        nearDischarge: this.nearDischarge,
        dischargeDistance: this.dischargeDistance,
        dischargePosition: this.dischargePosition,
        cleanedHowOften: this.cleanedHowOften,
        cleanedYearRoundOrSeasonal: this.cleanedYearRoundOrSeasonal,
        cleaningMethod: this.cleaningMethod,
        responsibleForCleaning: this.responsibleForCleaning,
        additionalComments: this.additionalComments,
        amendment: this.amendment,
        dateCompleted: this.dateCompleted,
        enteredBy: this.enteredBy,
        enteredByPhone: this.enteredByPhone,
        enteredByEmail: this.enteredByEmail
      }
      console.log(newSite)
      this.$store.dispatch('sites/createSite', newSite)
    }
  }
}
</script>
<style>
.font-size * {
   font-size: 13px;
}
</style>
