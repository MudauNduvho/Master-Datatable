import { CheckmarkOutline, CloseOutline } from "react-ionicons";
import { ColumnData } from "../types";

export const data: ColumnData = {
	Name: {
		values: [
			"Samkelo Zwane",
"Tshilidzi Muthabi",
"Nandi Mthethwa",
"Thandiwe Mkhize",
"Mandlakazi Sibeko",
"Lerato Dlamini",
"Nomvula Khumalo",
"Sipho Mokoena",
"Zandile Zungu",
"Nkosi Mbatha",
"Puleng Molefe",
"Kagiso Madiba",
"Nomzamo Ndlovu",
"Bhekizizwe Ngcobo",
"Thando Msimang",
"Zanele Zondi",
"Tumisang Mofokeng",
"Khensani Mabuza",
"Thabiso Mahlangu",
"Thobeka Ndaba",

		],
		classNames: (value: string | boolean | number) =>
			value === "Jane Smith" || value === "Emma Martinez"
				? "text-green-400 font-medium"
				: "text-white",
	},
	Age: {
		values: [
			"28",
			"34",
			"45",
			"29",
			"40",
			"40",
			"32",
			"26",
			"38",
			"31",
			"30",
			"27",
			"33",
			"44",
			"28",
			"39",
			"39",
			"25",
			"36",
			"37",
		],
	},
	Email: {
		values: [
			"samkelozwane01@vmail.com",
"tshilidzimuthabi02@vmail.com",
"nandimthethwa03@vmail.com",
"thandiwemkhize04@vmail.com",
"mandlakazisibeko05@vmail.com",
"leratodlamini06@vmail.com",
"nomvulakhumalo07@vmail.com",
"siphomokoena08@vmail.com",
"zandilezungu09@vmail.com",
"nkosimbatha10@vmail.com",
"pulengmolefe11@vmail.com",
"kagisomadiba12@vmail.com",
"nomzamondlovu13@vmail.com",
"bhekezizwengcobo14@vmail.com",
"thandomsimang15@vmail.com",
"zanelezondi16@vmail.com",
"tumisangmofokeng17@vmail.com",
"khensanimabuza18@vmail.com",
"thabisomahlangu19@vmail.com",
"thobekandaba20@vmail.com",

		],
		classNames: (value: string | boolean | number) =>
			typeof value === "string" && value.includes("john")
				? "text-green-400 font-medium"
				: "text-white",
	},
	Role: {
		values: [
			"CEO",
			"CTO",
			"Admin",
			"Client",
			"Designer",
			"Director",
			"Developer",
			"Producer",
			"Designer",
			"Publisher",
			"QA",
			"Manager",
			"Engineer",
			"Artist",
			"Writer",
			"Analyst",
			"Architect",
			"Musician",
			"Consultant",
			"Lawyer",
		],
	},
	Salary: {
		values: [
			250000, 130000, 72000, 68500, 91000, 85000, 79000, 104000, 54800, 91500, 32000, 125000, 80000, 60000,
			74000, 82000, 95000, 8800, 72000, 110000,
		],
		renderValue: (value: string | number | boolean) => {
			if (typeof value === "number") {
				return (
					<div className={`font-medium ${value > 8000 ? "text-green-400" : "text-red-400"}`}>
						ZAR {value.toLocaleString()}
					</div>
				);
			}
			return value;
		},
	},
	Active: {
		values: [
			false,
			true,
			false,
			true,
			false,
			true,
			true,
			false,
			true,
			false,
			true,
			false,
			true,
			false,
			true,
			false,
			true,
			false,
			true,
			false,
		],
		renderBoolean: (value: boolean) =>
			value ? (
				<CheckmarkOutline
					cssClasses={"!text-green-400"}
					width={"30px"}
					height={"30px"}
				/>
			) : (
				<CloseOutline
					cssClasses={"!text-red-400"}
					width={"30px"}
					height={"30px"}
				/>
			),
	},
};
