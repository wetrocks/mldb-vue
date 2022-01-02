<template>
<v-app id="inspire">
 <div>
    <h3>Create a Site</h3>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1">Site ID
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          :complete="e1 > 2"
          step="2">GPS Data
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="e1 > 3">Beach Info
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4" :complete="e1 > 4">Misc
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="5" :complete="e1 > 5">Maint
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
      <v-stepper-content step="1">
          <v-form
            ref="step1Form"
            v-model="step1Valid"
            lazy-validation>
          <v-card color="grey lighten-5">
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col cols="3">
                      <v-text-field
                              class="font-size"
                              dense
                              minlength=5
                              maxlength=25
                              counter=25
                              label="Site Name"
                              :rules="siteNameRules"
                              v-model=siteName>
                      </v-text-field>
                  </v-col>
                  <v-col cols="3" class="font-size">
                    <v-select
                          class="font-size"
                          dense
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
          </v-form>
            <v-btn
              class="mt-6 mr-2"
              color="primary"
              rounded
              :disabled="!step1Valid"
              @click="step1Validate()">
              Continue
            </v-btn>
            <v-btn rounded class="mt-6" text to="/site">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-form
            ref="step2Form"
            v-model="step2Valid"
            lazy-validation>
          <v-card color="grey lighten-5">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="3">
                      <v-text-field class="font-size" dense label="Coordinates Start 50M" v-model=startGPS ></v-text-field>
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
          </v-form>
          <v-btn
            class="mt-6 mr-2"
            rounded
            color="primary"
            :disabled="!step2Valid"
            @click="step2Validate()">
            Continue
          </v-btn>
          <v-btn
            rounded
            class="mt-6 mr-2"
            @click="e1 = 1"
            color="primary">Back</v-btn>
          <v-btn rounded class="mt-6" text to="/site">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-form
            ref="step3Form"
            v-model="step3Valid"
            lazy-validation>
          <v-card color="grey lighten-5">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="3">
                      <v-text-field
                                  class="font-size"
                                  dense
                                  :rules="beachMeterRules"
                                  maxlength=3
                                  counter=3
                                  type='number'
                                  label="Width at mean spring low tide (M):"
                                  v-model=lowTideWidth>
                      </v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                                  class="font-size"
                                  dense
                                  maxlength=3
                                  counter=3
                                  label="Width at mean spring high tide (M):"
                                  :rules="beachMeterRules"
                                  v-model=hiTideWidth></v-text-field>
                  </v-col>
                  <v-col cols="3">
                      <v-text-field
                                    class="font-size"
                                    dense
                                    label="Total beach length (M):"
                                    type="number"
                                    maxlength=3
                                    counter=3
                                    :rules="beachMeterRules"
                                    v-model=beachLength></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                        class="font-size"
                        dense
                        label="Back of Beach (example dunes):"
                        v-model=beachBack
                        maxlength=50
                        counter=50>
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                      <v-combobox
                          class="font-size"
                          :items="direction"
                          dense
                          multiple
                          label="Prevailing currents off the beach"
                          :rules="prevailingCurrentRules"
                          v-model="prevailingCurrent">
                      </v-combobox>
                  </v-col>
                  <v-col cols="3">
                      <v-combobox
                          class="font-size"
                          multiple
                          dense
                          :items="direction"
                          label="Prevailing winds"
                          :rules="prevailingWindsRules"
                          v-model="prevailingWinds">
                      </v-combobox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                      <v-combobox
                          class="font-size"
                          multiple
                          dense
                          :items="direction"
                          label="Looking from the beach to the sea, what direction is the beach facing?"
                          :rules="beachDirectionRules"
                          v-model="beachDirection">
                        </v-combobox>
                  </v-col>
                  <v-col cols="6">
                      <v-text-field class="font-size" dense label="Type of beach material (% coverage, e.g.: 40% sand, 60% pebbles)" v-model=beachMaterial></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                <v-col cols="3">
                      <v-text-field class="font-size" dense label="Beach Slope (e.g. slope 20%)" v-model=beachTopography></v-text-field>
                  </v-col>
                  <v-col cols="3">
                      <v-select
                        class="font-size"
                        dense
                        label="Beach Curvature"
                        :items="curvature"
                        v-model="beachCurvature">
                      </v-select>
                  </v-col>
                  <v-col cols="3">
                    <v-select
                        class="font-size"
                        dense
                        label="Horizontal Profile"
                        :items="profiles"
                        v-model="horizontalBeachProfile">
                      </v-select>
                  </v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-text-field class="font-size" dense label="Are there any objects in the sea (e.g. a pier) that influence the currents?" v-model=seaObjects></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                      <v-switch class="font-size" dense :change="developmentBehindChange()" label="Is there any development behind the beach?" v-model=developmentBehindBeach></v-switch>
                      <v-text-field class="font-size" dense label="Describe the development:" :disabled="!developmentBehindBeach" v-model=developmentBehindBeachDesc></v-text-field>
                </v-col>
                </v-row>
                <v-row>
                <v-col cols="3">
                      <v-text-field class="font-size" dense label="Major Beach Usage" v-model=majorUsage></v-text-field>
                  </v-col>
                  <v-col cols="4">
                      <v-text-field class="font-size" dense label="Estimated # of person visits per year" v-model=beachVisitsPerYear></v-text-field>
                  </v-col>
                  <v-col cols="3">
                      <v-combobox
                          class="font-size"
                          multiple
                          dense
                          :items="beachAccessValues"
                          label="Access to the Beach"
                          :rules="beachAccessRules"
                          v-model="beachAccess">
                    </v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          </v-form>
          <v-btn
            class="mt-6 mr-2"
            rounded
            color="primary"
            :disabled="!step3Valid"
            @click="step3Validate()">
            Continue
          </v-btn>
          <v-btn
            rounded
            class="mt-6 mr-2"
            @click="e1 = 2"
            color="primary">Back</v-btn>
         <v-btn rounded class="mt-6" text to="/site">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-form
            ref="step4Form"
            v-model="step4Valid"
            lazy-validation>
              <v-card color="grey lighten-5">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="5">
                          <v-text-field
                            class="font-size"
                            type='number'
                            maxLength='3'
                            counter='3'
                            dense
                            label="What is the distance to the nearest town(km):"
                            v-model=nearestTown>
                          </v-text-field>
                      </v-col>
                      <v-col cols="4">
                          <v-combobox
                              class="font-size"
                              :items="direction"
                              dense
                              multiple
                              label="Position of town in relation to survey area:"
                              :rules="townPositionRules"
                              v-model=townPosition>
                          </v-combobox>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="5">
                          <v-text-field
                          class="font-size"
                          dense
                          label="What is the (seasonal) population size of this town:"
                          v-model=townPopulation>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                          <v-switch class="font-size" :change="foodOnBeachChange()" dense label="Are there food/drink outlets on the beach?" v-model=foodOnBeach></v-switch>
                      </v-col>
                   </v-row>
                    <v-row>
                      <v-col cols="5">
                          <v-text-field
                            class="font-size"
                            maxlength=3
                            counter=3
                            type='number'
                            :disabled="!foodOnBeach"
                            dense
                            label="Distance from the survey are to the food/drink outlet(km):"
                            v-model=foodDistance>
                          </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="5">
                        <v-combobox
                          class="font-size"
                          :items="direction"
                          :disabled="!foodOnBeach"
                          dense
                          multiple
                          label="Position of food/drink outlet to the survey area:"
                          :rules="foodPositionRules"
                          v-model="foodPosition">
                      </v-combobox>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                          <v-switch
                            class="font-size"
                            :change="foodYearRoundChange()"
                            :disabled="!foodOnBeach"
                            dense
                            label="Present all year round?"
                            v-model=foodYearRound>
                          </v-switch>
                      </v-col>
                    </v-row>
                    <v-row>
                    <v-col cols="4">
                      <v-combobox
                          class="font-size"
                          multiple
                          dense
                          :disabled="!foodYearRound"
                          :items="months"
                          label="Which month(s) is the food outlet present?"
                          v-model="foodMonths">
                    </v-combobox>
                    </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                          <v-text-field
                            class="font-size"
                            dense
                            maxlength=3
                            counter=3
                            type='number'
                            label="Distance from the beach to the nearest shipping lane(km):"
                            v-model=nearestShippingLane>
                          </v-text-field>
                      </v-col>
                      <v-col cols="4">
                          <v-text-field
                            class="font-size"
                            dense
                            maxlength=6
                            counter=6
                            type='number'
                            label="Estimated # of ships per year:"
                            v-model=shippingLaneDensity>
                          </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                          <v-text-field
                            class="font-size"
                            dense
                            label="Is it used mainly by merchant ships, fishing vessels, or all kinds:"
                            v-model=shippingLaneUse>
                          </v-text-field>
                      </v-col>
                      <v-col cols="5">
                          <v-combobox
                              class="font-size"
                              :items="direction"
                              dense
                              multiple
                              label="Position of shipping lane in relation to the survey area:"
                              :rules="shippingLanePositionRules"
                              v-model=shippingLanePosition>
                          </v-combobox>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="5">
                          <v-text-field
                            class="font-size"
                            dense
                            label="Distance from the beach to the nearest harbour(km):"
                            maxlength=6
                            counter=6
                            type='number'
                            v-model=nearestHarbour>
                          </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="2">
                          <v-text-field class="font-size" dense label="Name of the harbour:" v-model=harbourName></v-text-field>
                      </v-col>
                      <v-col cols="2">
                          <v-text-field class="font-size" dense label="Type of harbor:"  v-model=harbourType></v-text-field>
                      </v-col>
                      <v-col cols="3">
                          <v-text-field
                            class="font-size"
                            dense
                            maxlength=6
                            counter=6
                            type='number'
                            label="Size of harbour (# of ships):"
                            v-model=harbourSize>
                          </v-text-field>
                      </v-col>
                      <v-col cols="4">
                          <v-combobox
                              class="font-size"
                              :items="direction"
                              dense
                              multiple
                              label="Position of harbour in relation to the survey area:"
                              :rules="harbourPositionRules"
                              v-model=harbourPosition>
                          </v-combobox>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="5">
                          <v-text-field
                            class="font-size"
                            dense
                            maxlength=6
                            counter=6
                            type='number'
                            label="Distance from the beach to the nearest river mouth(km):"
                            v-model=riverDistance>
                          </v-text-field>
                      </v-col>
                      <v-col cols="2">
                          <v-text-field class="font-size" dense label="Name of the river:"  v-model=riverName></v-text-field>
                      </v-col>
                      <v-col cols="4">
                          <v-combobox
                              class="font-size"
                              :items="direction"
                              dense
                              multiple
                              label="Position of river mouth in relation to survey area:"
                              :rules="riverPositionRules"
                              v-model=riverPosition>
                          </v-combobox>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="5">
                          <v-text-field class="font-size" dense label="Is the beach located near a discharge of waste water:" v-model=nearDischarge></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="4">
                          <v-text-field
                            class="font-size"
                            dense
                            maxlength=6
                            counter=6
                            type='number'
                            label="Distance from the beach to discharge points(km):"
                            v-model=dischargeDistance>
                          </v-text-field>
                      </v-col>
                      <v-col cols="5">
                          <v-combobox
                              class="font-size"
                              :items="direction"
                              dense
                              multiple
                              label="Position of discharge points in relation to survey area:"
                              :rules="dischargePositionRules"
                              v-model=dischargePosition>
                          </v-combobox>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
          </v-form>
          <v-btn
            class="mt-6 mr-2"
            rounded
            color="primary"
            :disabled="!step4Valid"
            @click="step4Validate()">
            Continue
          </v-btn>
          <v-btn
            rounded
            class="mt-6 mr-2"
            @click="e1 = 3"
            color="primary">Back</v-btn>
          <v-btn rounded class="mt-6" text to="/site">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-form
            ref="step5Form"
            v-model="step5Valid"
            lazy-validation>
          <v-card>
             <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                      <span dense class="font-size">How often is the beach cleaned?</span>
                    <v-radio-group
                      v-model="cleanedYearRoundOrSeasonal"
                      row>
                      <v-radio
                        class="font-size"
                        label="Year Round"
                        value="yearRound">
                      </v-radio>
                      <v-radio
                        class="font-size"
                        label="Seasonal"
                        :change="SeasonalChange()"
                        value="seasonal">
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-combobox
                          class="font-size"
                          multiple
                          dense
                          :disabled="SeasonalChange()"
                          :items="months"
                          label="If seasonal, please specify which months:"
                          v-model="cleanedMonths">
                      </v-combobox>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                      <v-select
                          class="font-size"
                          :items="cleaningFrequency"
                          dense
                          label="What is the frequency the beach is cleaned?"
                          :rules="cleanedHowOftenRules"
                          v-model=cleanedHowOften>
                      </v-select>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                          class="font-size"
                          dense
                          counter="50"
                          maxLength="50"
                          label="For 'other', please specify:"
                          :disabled="cleanedOtherDisabled()"
                          v-model=cleanedOther>
                      </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                      <v-select
                          class="font-size"
                          :items="cleaningMethods"
                          dense
                          label="What method is used?"
                          v-model=cleaningMethod>
                      </v-select>
                  </v-col>
                  <v-col cols="5">
                      <v-text-field
                          class="font-size"
                          counter="50"
                          maxLength="50"
                          dense
                          label="Who's responsible for cleaning:"
                          v-model=responsibleForCleaning>
                      </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="7">
                      <v-textarea
                        class="font-size"
                        maxlength=250
                        counter=250
                        dense
                        label="Additional comments and observations about this beach:"
                        v-model=additionalComments>
                      </v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                    <v-col cols="5">
                        <v-checkbox class="font-size" reverse dense label="Is this an amendment to an existing questionnaire?" v-model=amendment></v-checkbox>
                    </v-col>
                    <v-col cols="2">
                      <v-menu
                        v-model="fromDateMenu"
                        :close-on-content-click="false"
                        dense
                        max-width="290px"
                        min-width="290px">
                      <template v-slot:activator="{ on }">
                      <v-text-field
                        label="Completed Date"
                        readonly
                        dense
                        class=font-size
                        :value="completedDateDisp"
                        v-on="on"></v-text-field>
                      </template>
                      <v-date-picker
                        locale="en-in"
                        v-model="dateCompleted"
                        no-title
                        @input="fromDateMenu = false"
                        :min="minDate"></v-date-picker>
                    </v-menu>
                    </v-col>
                  </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          </v-form>
          <v-btn
            class="mt-6 mr-2"
            rounded
            color="primary"
            :disabled="!step5Valid"
            @click="step5Validate()">
            Submit
          </v-btn>
          <v-btn
            rounded
            class="mt-6 mr-2"
            @click="e1 = 4"
            color="primary">Back</v-btn>
          <v-btn rounded class="mt-6" text to="/site">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      e1: 1,
      step1Valid: true,
      step2Valid: true,
      step3Valid: true,
      step4Valid: true,
      step5Valid: true,
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
      prevailingCurrent: [],
      prevailingWinds: [],
      beachDirection: [],
      beachMaterial: null,
      beachTopography: null,
      beachCurvature: null,
      horizontalBeachProfile: null,
      seaObjects: null,
      majorUsage: null,
      beachVisitsPerYear: null,
      beachAccess: [],
      nearestTown: null,
      townPosition: null,
      townPopulation: null,
      developmentBehindBeach: false,
      developmentBehindBeachDesc: null,
      foodOnBeach: false,
      foodDistance: null,
      foodYearRound: false,
      foodMonths: null,
      foodPosition: [],
      nearestShippingLane: null,
      shippingLaneDensity: null,
      shippingLaneUse: null,
      shippingLanePosition: [],
      nearestHarbour: null,
      harbourName: null,
      harbourType: null,
      harbourSize: null,
      harbourPosition: [],
      riverDistance: null,
      riverName: null,
      riverPosition: [],
      nearDischarge: null,
      dischargeDistance: null,
      dischargePosition: [],
      cleanedHowOften: null,
      cleanedYearRoundOrSeasonal: null,
      cleanedMonths: [],
      cleanedOther: null,
      cleaningMethod: null,
      responsibleForCleaning: null,
      additionalComments: null,
      amendment: null,
      dateCompleted: null,
      enteredBy: null,
      enteredByPhone: null,
      enteredByEmail: null,
      beachAccessValues: [
        { text: 'Vehicle' },
        { text: 'Pedestrian' },
        { text: 'Boats' }
      ],
      countries: [
        { value: 'AW', text: 'Aruba' },
        { value: 'BQ', text: 'Bonaire, Sint Eustatius and Saba', selected: true },
        { value: 'CW', text: 'Curacao' }
      ],
      direction: [
        { value: 'N', text: 'North' },
        { value: 'S', text: 'South' },
        { value: 'E', text: 'East' },
        { value: 'W', text: 'West' }
      ],
      curvature: [
        { text: 'Concave' },
        { text: 'Convex' },
        { text: 'Sinusoidal' },
        { text: 'Straight' }
      ],
      profiles: [
        { text: 'Linear' },
        { text: 'Concanve' },
        { text: 'Convex' },
        { text: 'Mixed' }
      ],
      cleaningFrequency: [
        { text: 'Daily' },
        { text: 'Weekly' },
        { text: 'Monthly' },
        { text: 'Other' }
      ],
      cleaningMethods: [
        { text: 'Manual' },
        { text: 'Mechanical' }
      ],
      months: [
        { text: 'January' },
        { text: 'February' },
        { text: 'March' },
        { text: 'April' },
        { text: 'May' },
        { text: 'June' },
        { text: 'July' },
        { text: 'August' },
        { text: 'September' },
        { text: 'October' },
        { text: 'November' },
        { text: 'December' }
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
      beachMeterRules: [
        v => (v && v.length <= 3) || 'Must be less than 999'
      ],
      countryRules: [
        v => !!v || 'Country is required'
      ],
      beachAccessRules: [
      ],
      cleanedHowOftenRules: [
      ],
      prevailingWindsRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      prevailingCurrentRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      townPositionRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      foodPositionRules: [
        //  todo - issue with validation on disabled fields
        //  v => (v && !v.disabled && v.length < 3) || 'Maximum of 2 selections'
      ],
      shippingLanePositionRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      harbourPositionRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      riverPositionRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      dischargePositionRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      beachDirectionRules: [
        v => (v && v.length < 3) || 'Maximum of 2 selections'
      ],
      fromDateMenu: false,
      fromDateVal: null,
      minDate: '2020-01-05',
      maxDate: '2019-08-30'
    }
  },
  computed: {
    completedDateDisp () {
      return this.dateCompleted
    }
  },
  methods: {
    developmentBehindChange () {
      if (!this.developmentBehindBeach) {
        this.developmentBehindBeachDesc = null
      }
    },
    cleanedOtherDisabled () {
      if (this.cleanedHowOften === 'Other' || this.cleanedHowOften === '') {
        return false
      } else {
        this.cleanedOther = null
        return true
      }
    },
    foodOnBeachChange () {
      if (!this.foodOnBeach) {
        this.foodDistance = null
        this.foodYearRound = false
        this.foodPosition = null
        this.foodMonths = null
      }
    },
    foodYearRoundChange () {
      if (!this.foodYearRound) {
        this.foodMonths = null
      }
    },
    SeasonalChange () {
      if (this.cleanedYearRoundOrSeasonal === 'seasonal') {
        return false
      } else {
        this.cleanedMonths = null
        return true
      }
    },
    cleanedHowOftenChange () {
      if (!this.cleanedHowOften === 'Other') {
        return true
      } else {
        return false
      }
    },
    step1Validate () {
      this.step1Valid = this.$refs.step1Form.validate()

      if (this.step1Valid) {
        this.e1 = 2
      }
    },
    step2Validate () {
      this.step2Valid = this.$refs.step2Form.validate()

      if (this.step2Valid) {
        this.e1 = 3
      }
    },
    step3Validate () {
      this.step3Valid = this.$refs.step3Form.validate()

      if (this.step3Valid) {
        this.e1 = 4
      }
    },
    step4Validate () {
      this.step4Valid = this.$refs.step4Form.validate()

      if (this.step4Valid) {
        this.e1 = 5
      }
    },
    step5Validate () {
      this.step5Valid = this.$refs.step5Form.validate()

      if (this.step5Valid) {
        this.e1 = 6
        this.saveData()
      }
    },
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
        developmentBehindBeach: this.developmentBehindBeach,
        developmentBehindBeachDesc: this.developmentBehindBeachDesc,
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
        harbourPosition: this.harbourPosition,
        riverDistance: this.riverDistance,
        riverName: this.riverName,
        riverPosition: this.riverPosition,
        nearDischarge: this.nearDischarge,
        dischargeDistance: this.dischargeDistance,
        dischargePosition: this.dischargePosition,
        cleanedHowOften: this.cleanedHowOften,
        cleanedOther: this.cleanedOther,
        cleanedMonths: this.cleanedMonths,
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
