export default class LaneNumber {
    private value: number;

    private secret: boolean;

    public constructor(){
        this.value = 0; // TODO: Hardcoded!
        this.secret = false; // TODO: Hardcoded! 
    }

    public getValue(): number {
        return this.value;
    }

    public isSecret(): boolean {
        return this.secret;
    }
}