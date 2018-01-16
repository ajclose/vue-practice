<template>
    <div class="container">
      <template v-if="!isSubmitted">
        <form>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <!-- Exercise 1 -->
              <!-- Create a Signup Form where you retrieve the following Information -->
              <!-- Full Name (First Name + Last Name) -->
              <!-- Mail -->
              <!-- Password -->
              <!-- Store Data? Yes/No -->
              <full-name v-model="fullName"></full-name>
              <!-- <div class="form-group">
                <label for="firstName">First Name</label>
                <input class="form-control" type="text" name="firstName" v-model="firstName">
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input class="form-control" type="text" name="lastName" v-model="lastName">
              </div> -->
              <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="text" name="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" type="text" name="password" v-model="password">
              </div>
              <label>Store Data?</label>
              <div class="form-group">
                <label for="yes">
                  <input type="radio" id="yes" value="Yes" v-model="isStored">Yes
                </label>
                <label for="no">
                  <input type="radio" id="no" value="No" v-model="isStored">No
                </label>
              </div>
              <div class="form-group">
                <button @click.prevent="isSubmitted = true" class="btn btn-primary">Submit</button>
              </div>


              <!-- Exercise 2 -->
              <!-- Only display the Form if it has NOT been submitted -->
              <!-- Display the Data Summary ONCE the Form HAS been submitted -->

              <!-- Exercise 3 -->
              <!-- Edit the Example from above and create a custom "Full Name" Control -->
              <!-- which still holds the First Name and Last Name Input Field -->
            </div>
          </div>
        </form>

      </template>
        <template v-else>

          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4>Your Data</h4>
                </div>
                <div class="panel-body">
                  <p>Full Name: {{ fullName }}</p>
                  <p>Mail: {{ email }}</p>
                  <p>Password: {{ password }}</p>
                  <p>Store in Database?: {{ isStored }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
    </div>
</template>

<script>
  import FullName from './FullNameInput.vue'

    export default {
      data() {
        return {
          fullName: 'Alex Close',
          isSubmitted: false,
          email: '',
          password: '',
          isStored: "Yes"
        }
      },
      components: {
        'full-name': FullName
      }
    }
</script>

<style>
</style>
