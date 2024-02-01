function mixin(mainClass){
    Object.assign()
}
class Pet {
    feed(nutrient){

    }
}
function mixinPetFeed(mainClass){
    Object.assign(mainClass.prototype, {feed: Pet.prototype.feed});
    return mainClass;
}

class Dog extends mixinPetFeed(){
    
}