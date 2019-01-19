export interface TwitchAuthorization {
	channelId: string;
	clientId: string;
	token: string;
	userId: string;
}

export interface TwitchProduct {
	domain: string;
	sku: string;
	cost: {
		amount: number,
		type: string;
	};

	inDevelopment?: boolean;
	displayName: string;
	broadcast: boolean;
}

export interface TwitchTransaction {
	product: TwitchProduct;
	transactionId: string;
	userId: string;
	displayName: string;
	initiator: string;
	transactionReceipt: string;
}

export interface TwitchWindow {
	Twitch: {
		ext: {
			onContext: any;
			onAuthorized: any;

			configuration: {
				onChanged: any;

				broadcaster: {
					version: string;
					content: string;
				};

				global: {
					version: string;
					content: string;
				}
			};

			bits: {
				useBits: (sku: string) => void;
				onTransactionCancelled: any;
				onTransactionComplete: any;
			};
		};
	};
}

export interface TwitchContext {
	videoResolution: string;
	bitrate: number;
	bufferSize: number;
}
