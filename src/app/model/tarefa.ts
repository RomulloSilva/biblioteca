/**"userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false */
export class Tarefa {
    private userId: number;
    private id: number;
    private title: string;
    private completed: boolean;

    /*---------------------------------------------------- */
    public getUserId(): number {
        return this.userId
    }
    public setUserId(userId: number): void {
        this.userId = userId;
    }
    /*---------------------------------------------------- */
    public getId(): number {
        return this.id
    }
    public setId(id: number): void {
        this.id = id;
    }
    /*---------------------------------------------------- */
    public getTitle(): string {
        return this.title
    }
    public setTitle(title: string): void {
        this.title = title;
    }
    /*---------------------------------------------------- */
    public getCompleted(): boolean {
        return this.completed
    }
    public setCompleted(completed: boolean): void {
        this.completed = completed;
    }

}