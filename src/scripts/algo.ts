export class Algo {
	static getCharsCount(message: string) {
		let occurrencies: { [char: string]: number } = {};

		message = message.toUpperCase();

		const chars = message.split("");
		chars.forEach((char) => {
			if (char in occurrencies) {
				occurrencies[char] += 1;
			} else {
				occurrencies[char] = 1;
			}
		});

		return occurrencies;
	}

	static getCharsProb(
		dictionary: { [char: string]: number },
		totalCount: number
	) {
		for (const key in dictionary) {
			dictionary[key] = dictionary[key] / Math.abs(totalCount);
		}

		return dictionary;
	}

	static replaceChar(message: string, charFrom: string, charTo: string) {
		const charFromUpper = charFrom.toUpperCase();
		const charFromLower = charFrom.toLowerCase();

		const charToUpper = charTo.toUpperCase();
		const charToLower = charTo.toLowerCase();

		message = message.replace(new RegExp(charFromUpper, "g"), charToUpper);
		message = message.replace(new RegExp(charFromLower, "g"), charToLower);

		return message;
	}
}
