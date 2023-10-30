import BegginerImg from '../img/rates/begginer.svg'
import ProImg from '../img/rates/pro.svg'
import BusinessImg from '../img/rates/business.svg'

export const ratesInfo = [
    {
        title: "Beginner",
        description: "Для небольшого исследования",
        background: "#FFB64F",
        url: BegginerImg,
        currentRate: {current: false, name: "Текущий тариф"},
        body: {
            include: "В тариф входит:",
            tips: ["Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"]
        },
        price: {
            discountPrice: "799 ₽",
            price: "1 200 ₽",
            plan: "или 150 ₽/мес. при рассрочке на 24 мес."
        }
    },
    {
        title: "Pro",
        description: "Для HR и фрилансеров",
        background: "#7CE3E1",
        url: ProImg,
        currentRate: {current: false, name: "Текущий тариф"},
        body: {
            include: "В тариф входит:",
            tips: ["Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"]
        },
        price: {
            discountPrice: "1 299 ₽",
            price: "2 600 ₽",
            plan: "или 279 ₽/мес. при рассрочке на 24 мес."
        }
    },
    {
        title: "Business",
        description: "Для корпоративных клиентов",
        background: "#000",
        url: BusinessImg,
        currentRate: {current: false, name: "Текущий тариф"},
        body: {
            include: "В тариф входит:",
            tips: ["Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"]
        },
        price: {
            discountPrice: "2 379 ₽",
            price: "3 700 ₽",
            plan: ""
        }
    },

]