<template>
    <h1 class="l">multiple query</h1>
    <div class="abc">
        <!-- <label v-for="option in results" :key="option.id">
            <input type="checkbox" :value="option.Customer_Code" v-model="another" />
            <p>Customer Code: {{ option.Customer_Code }}</p>
            <p>Customer Name: {{ option.Customer_Name }}</p>
            <p>Customer Email:{{ option.Customer_Email }}</p>
            <p>Customer Telephone: {{ option.Customer_Tel }}</p>
            <p>Customer Status: {{ option.Customer_Status }}</p>
        </label> -->
        <!-- <p>Selected options: {{ another }}</p> -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Customer Code</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Email</th>
                    <th scope="col">Customer Telephone</th>
                    <th scope="col">Customer Status</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="i in results" v-bind:key="i.id">
                <th><input type="checkbox" :value="i.Customer_Code" v-model="another" /></th>
                <td>{{i.id}}</td>
                <td>{{ i.Customer_Code }}</td>
                <td>{{ i.Customer_Name }}</td>
                <td>{{ i.Customer_Email }}</td>
                <td>{{ i.Customer_Tel }}</td>
                <td>{{ i.Customer_Status }}</td>
            </tr>
        </tbody>
        </table>
        <br>
        <button v-on:click="delmp(another)" class="btn btn-danger">Delete</button>
        <button v-on:click="editOne(another)" class="btn btn-primary">Edit Status to 1</button>
        <button v-on:click="editZero(another)" class="btn btn-info">Edit Status to 0</button>
    </div>
</template>
  
<script>
import CustomerService from '../services/CustomerService';
export default {
    data() {
        return {
            results: [],
            another: [],
            oj: {}
        }
    },
    async created() {
        this.results = (await CustomerService.index()).data
    },
    methods: {
        async delmp(ano) {
            try {
                for (let i = 0; i < ano.length; i++) {
                    // console.log(ano[i])
                    await CustomerService.deleteCm(ano[i])
                }
                this.results = (await CustomerService.index()).data
            } catch (err) {
                console.log(err)
            }
        },
        async editOne(ano) {
            try {
                for (let i = 0; i < ano.length; i++) {
                    this.oj = [{
                        Customer_Code: ano[i],
                        Customer_Status: 1
                    }]
                    await CustomerService.editCm(this.oj)
                }
                this.results = (await CustomerService.index()).data
                this.another = []
            } catch (err) {
                console.log(err)
            }
        },
        async editZero(ano) {
            try {
                for (let i = 0; i < ano.length; i++) {
                    this.oj = [{
                        Customer_Code: ano[i],
                        Customer_Status: 0
                    }]
                    await CustomerService.editCm(this.oj)
                }
                this.results = (await CustomerService.index()).data
                this.another = []
            } catch (err) {
                console.log(err)
            }
        },
    }
};
</script>
<style scoped>
.abc{
    margin: 40px;
}
.l{
    margin-left: 40px;
}
</style>
  