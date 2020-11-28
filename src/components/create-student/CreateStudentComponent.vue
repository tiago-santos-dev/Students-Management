<template>
    <div class="container">
      <div class="card">
       <div class="card-header">
          <h3>Add Student</h3>
       </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label class="font-weight-bold">Name:</label>
              <input class="form-control"
                     type="text"
                     placeholder="Type Your Name"
                     v-model="student.name"
                     required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email:</label>
              <input class="form-control"
                     type="email"
                     placeholder="Type Your Email"
                     v-model="student.email"
                     required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Phone:</label>
              <input class="form-control"
                     type="phone"
                      placeholder="Type Your Phone"
                      v-model="student.phone"
                      required>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  components: {
    name: 'CreateStudentComponent',
  },
  data() {
    return {
      student: {
        name: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {

    },
  },
};
</script>
