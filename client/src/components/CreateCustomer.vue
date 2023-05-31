<template>
    <h1 class="a">create customer</h1>
    <div class="do">
        <!-- <form v-on:submit.prevent="createCustomer">
            <p>Customer Code: <input type="text" v-model="customer.Customer_Code"></p>
            <p>Customer Name: <input type="text" v-model="customer.Customer_Name"></p>
            <p>Customer Email:<input type="text" v-model="customer.Customer_Email"></p>
            <p>Customer Telephone: <input type="text" v-model="customer.Customer_Tel"></p>
            <p><button type="submit">create user</button></p>
        </form> -->
        <form v-on:submit.prevent="createCustomer">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Customer Code</label>
              <input type="text" class="form-control"  v-model="customer.Customer_Code">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Customer Name</label>
              <input type="text" class="form-control"  v-model="customer.Customer_Name">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Customer Email</label>
                <input type="text" class="form-control" v-model="customer.Customer_Email">
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Customer Telephone</label>
                <input type="text" class="form-control" v-model="customer.Customer_Tel">
              </div>
            <button type="submit" class="btn btn-primary">create user</button>
          </form>
    </div>
</template>
<script>
import CustomerService from '../services/CustomerService';
export default {
    data() {
        return {
            customer: {
                Customer_Code: '',
                Customer_Name: '',
                Customer_Email: '',
                Customer_Tel: '',
                Customer_Status: 1
            }
        }
    },
    methods: {
        async createCustomer() {
            try {
                await CustomerService.createCm(this.customer)
                this.$router.push({
                    name: 'showAllCm'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}

</script>
<style scoped>
    .do{
        margin: 40px;
    }
    .a{
        margin-left: 40px;
    }
</style>