import Api from './Api';

export default {

  // eslint-disable-next-line consistent-return
  async getStudents() {
    try {
      const response = await Api().get('students');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // eslint-disable-next-line consistent-return
  async getStudentById(id) {
    try {
      const response = await Api().get(`students/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // eslint-disable-next-line consistent-return
  async createNewStudent(student) {
    try {
      const response = await Api().post('/student', student);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  // eslint-disable-next-line consistent-return
  async updateStudent(id) {
    try {
      const response = await Api().put(`students/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // eslint-disable-next-line consistent-return
  async deleteStudent(id) {
    try {
      const response = await Api().delete(`students/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

};
