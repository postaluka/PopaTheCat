
export default class List
{
    constructor(yearContainer, monthContainer)
    {
        // console.log('start List');
        this.yearContainer = yearContainer;

        this.startYear = 2016;
        this.endYear = 2024;

        this.selectYear = this.yearContainer.children[0];
        this.selectYear.addEventListener('change', () =>
        {
            this.exportYear();
        });

        this.monthContainer = monthContainer;
        this.startMonth = 1;
        this.endMonth = 12;

        this.selectMonth = this.monthContainer.children[0];
        this.selectMonth.addEventListener('change', () =>
        {
            this.exportMonth();
        });


        this.createYears()
        this.createMonths()

    }

    createYears()
    {
        for (let i = this.startYear; i <= this.endYear; i++)
        {
            this.option = document.createElement('option');
            this.option.value = i;
            this.option.textContent = i;
            this.selectYear.appendChild(this.option);
        }
    }

    exportYear()
    {
        console.log(this.selectYear.value);
    }

    setArrayMonths()
    {
        this.arrayMonths = [
            'Січень',
            "Лютий",
            "Березень",
            "Квітень",
            "Травень",
            "Червень",
            "Липень",
            "Серпень",
            "Вересень",
            "Жовтень",
            "Листопад",
            "Грудень"
        ];

    }

    createMonths()
    {
        this.setArrayMonths()

        for (let i = this.startMonth; i <= this.endMonth; i++)
        {
            this.option = document.createElement('option');
            this.option.value = i;
            this.option.textContent = this.arrayMonths[i - 1];

            this.selectMonth.appendChild(this.option);
        }
    }

    exportMonth()
    {
        this.exportValue = this.arrayMonths[this.selectMonth.value - 1]
        console.log(this.exportValue);
    }
}