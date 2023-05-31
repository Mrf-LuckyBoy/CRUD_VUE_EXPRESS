<template>
    <h1 class="l"> edit customer</h1>
    <!-- <h2> Customer code {{ customer[0].Customer_Code }}</h2> -->
    <!-- <form v-on:submit.prevent="editCustomer">
        <p>Customer Name: <input type="text" v-model="customer[0].Customer_Name"></p>
        <p>Customer Email:<input type="text" v-model="customer[0].Customer_Email"></p>
        <p>Customer Telephone: <input type="text" v-model="customer[0].Customer_Tel"></p>
        <p>Customer Code: <input type="text" v-model="customer.Customer_Code"></p>
        <p>Customer Name: <input type="text" v-model="customer.Customer_Name"></p>
        <p>Customer Email:<input type="text" v-model="customer.Customer_Email"></p>
        <p>Customer Telephone: <input type="text" v-model="customer.Customer_Tel"></p>
        <p><button type="submit">edit customer</button></p>
    </form> -->
    <!-- <p>Customer Code: {{ customer[0].Customer_Code }} </p>
    <p>Customer Name: {{ customer[0].Customer_Name }} </p>
    <p>Customer Email: {{ customer[0].Customer_Email }} </p>
    <p>Customer Telephone: {{ customer[0].Customer_Tel }} </p> -->
    <form v-on:submit.prevent="editCustomer" class="f">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Customer Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="customer[0].Customer_Name">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Customer Email</label>
          <input type="text" class="form-control" id="exampleInputPassword1" v-model="customer[0].Customer_Email">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Customer Telephone</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="customer[0].Customer_Tel">
          </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script>
import axios from 'axios'
import CustomerService from '../services/CustomerService'
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
        async editCustomer() {
            await CustomerService.editCm(this.customer)
            console.log(typeof(this.customer))
            this.$router.push({
                    name: 'showAllCm'
                })
        },
    },
    async created() {
        try {
            let customerCode = this.$route.params.CMcode
            this.customer = (await CustomerService.showCm(customerCode)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped>
    .f{
        margin: 40px;
    }
    .l{
        margin-left: 40px;
    }
</style>    