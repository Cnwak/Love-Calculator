class LoveCalc {
  constructor(fname, sname) {
    this.fname = fname;
    this.sname = sname;
    this.client_id = 'love-calculator.p.rapidapi.com';
    this.client_key = '86d710b352msh5f76dc5e5fdc7b5p1352c8jsn894d96a5dc23';
  }

  async getPercentage() {
    const apiResponse = await fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.fname}&sname=${this.sname}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': `${this.client_id}`,
          'x-rapidapi-key': `${this.client_key}`,
        },
      }
    );

    const response = await apiResponse.json();

    return { response };
  }
}
