<template>
    <div class="sh">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Customer Code</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Email</th>
                    <th scope="col">Customer Telephone</th>
                    <th scope="col">Customer Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="i in results" v-bind:key="i.id">
                <th>{{ i.Customer_Code }}</th>
                <td>{{ i.Customer_Name }}</td>
                <td>{{ i.Customer_Email }}</td>
                <td>{{ i.Customer_Tel }}</td>
                <td>{{ i.Customer_Status }}</td>
                <td>
                    <button v-on:click="navigateTo('/Customer/' + i.Customer_Code)" class="btn btn-primary">Show this Customer</button>
                    <button v-on:click="navigateTo('/Customer/edit/' + i.Customer_Code, i)" class="btn btn-warning">Edit this Customer</button>
                    <button v-on:click="del(i.Customer_Code)" class="btn btn-danger">Delete this Customer</button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import CustomerService from '../services/CustomerService';

export default {
    data() {
        return {
            results: []
        }
    },
    async created() {
        this.results = (await CustomerService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async del(CMcode) {
            // let result = confirm("are you sure")
            try {
                await CustomerService.deleteCm(CMcode)
                this.rere()
                // this.$router.push({
                //     name: 'showAllCm'
                // })
            } catch (err) {
                console.log(err)
            }
        },
        async rere() {
            this.results = (await CustomerService.index()).data
        }
    }
}
</script>
<style scoped>
    .sh{
        margin: 20px;
    }
</style>