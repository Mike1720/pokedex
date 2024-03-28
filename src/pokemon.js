export class Pokemon {
    /**
     * 
     * @param {string URL} img URL direction of the image
     * @param {number} id identification number
     * @param {string} name name of the pokemon
     * @param {string[]} type type of pokemon
     * @param {number} weight pokemon's weight
     * @param {string[]} abilities pokemon's abilities
     * @param {string[]} weakness pokemon's weakness
     */
    constructor(img, id, name, type, weight, abilities, weakness) {
        this.img = img
        this.id = id
        this.name = name
        this.type = type
        this.weight = weight
        this.abilities = abilities
        this.weakness = weakness
    }
}