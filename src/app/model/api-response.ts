export class ApiResponse {

  data: any[] = [];
  message: string[] = [];
  state: string;

  constructor(data: any[], message: string[], state: string) {
    this.data = data;
    this.message = message;
    this.state = state;
  }

}
