<template>
    <div class="SCBC">
        <h1 class="a">Show Customer</h1>
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">Customer Code</th>
                    <td>{{ CMcode[0].Customer_Code }}</td>
                </tr>
                <tr>
                    <th scope="row">Customer Name</th>
                    <td>{{ CMcode[0].Customer_Name }}</td>
                </tr>
                <tr>
                    <th scope="row">Customer Email</th>
                    <td>{{ CMcode[0].Customer_Email }}</td>
                </tr>
                <tr>
                    <th scope="row">Customer Telephone</th>
                    <td>{{ CMcode[0].Customer_Tel }}</td>
                </tr>
                <tr>
                    <th scope="row">Customer Status</th>
                    <td>{{ CMcode[0].Customer_Status }}</td>
                </tr>
            </tbody>
        </table>
        <button v-on:click="goBack()" class="btn btn-secondary">Back</button>
    </div>
</template>
<script>
import CustomerService from '../services/CustomerService';

export default {
    data() {
        return {
            CMcode: {}
        }
    },
    async created() {
        try {
            let CCMcode = this.$route.params.CMcode
            this.CMcode = (await CustomerService.showCm(CCMcode)).data
            console.log(this.CMcode)
        } catch (error) {
            console.log(error)
        }
    },
    methods:{
        goBack(){
            this.$router.push({
                    name: 'showAllCm'
                })
        }
    }

}

</script>
<style scoped>
    .a{
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .SCBC{
        margin: 40px;
    }
</style>