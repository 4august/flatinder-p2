class NavigationView {
    constructor() {
        this.template();
    }

    template() {
        return `
        <div class=" d-flex justify-content-between">
            <svg id="main" width="24" height="24" viewBox="0 0 24 24" fill="E94057" xmlns="http://www.w3.org/2000/svg">
                <rect x="9.49902" y="4.49756" width="13" height="18" rx="2" fill="#E94057" stroke="#F3F3F3"/>
                <rect x="0.391602" y="4.48901" width="13" height="18" rx="2" transform="rotate(-15 0.391602 4.48901)" fill="#E94057" stroke="#F3F3F3"/>
            </svg>

            <!--<img id="main" src="imagens/cards.svg" alt="">-->

            <!--<img id="matchesList" src="imagens/indicator.svg" alt="">-->
            <svg id="matchesList" width="26" height="24" viewBox="0 0 26 24" fill="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6398 4 12.9953 4.92345 12 6.3369C11.0047 4.92345 9.36015 4 7.5 4Z" fill="#ADAFBB" stroke="ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!--<circle cx="20" cy="6" r="5" fill="#E94057" stroke="#F3F3F3" stroke-width="2"/>-->
            </svg>

            <!--<img id="profile" src="imagens/people.svg" alt="">-->
            <svg id="profile" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z" fill="#ADAFBB" stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z" fill="#ADAFBB" stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
        `
    }
}
