import Api from "./Api";

export default {
    index (search){
        return Api().get('showCMs')
    },
    showCm (CMcode){
        return Api().get('showByCmcode/'+CMcode)
    },
    createCm(CM){
        return Api().post('createCM/',CM)
    },
    editCm(CM){
        return Api().put('editCM/'+CM[0].Customer_Code,CM[0])
    },
    deleteCm(CM){
        return Api().delete('delCM/'+CM)
    }
}