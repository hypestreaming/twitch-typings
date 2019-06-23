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

export interface TransactionReceipt {
	topic: string;
	exp: number; // unix timestamp
	data: {
		transactionId: string;
		time: string; // iso
		userId: string;
		product: {
			domainId: string;
			sku: string;
			displayName: string;
			cost: {
				amount: number;
				type: string; // bits
			}
		},
	},
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
			actions: {
				requestIdShare(): void;
				followChannel(): void;
				subscribeToChannel(): void;
				onFollow(callback: any): void;
				onSubscribe(callback: any): void;
			};

			bits: {
				getProducts(): Promise<any>;
				onTransactionCancelled(callback: any);
				onTransactionComplete(callback: (transaction: TwitchTransaction) => void);
				setUseLoopback(state: boolean): void;
				showBitsBalance(): void;
				useBits(sku: string): void;
			};

			configuration: {
				broadcaster?: {
					content: string;
					version: string;
				};

				global?: {
					content: string;
					version: string;
				};

				onChanged(callback: () => void): void;

				set(segment: string, version: string, content: string): void;
			};

			onContext(callback: (context: any) => void): void;
			onAuthorized(callback: (auth: TwitchAuthorization) => void): void;
		};
	};
}

export interface TwitchContext {
	videoResolution: string;
	bitrate: number;
	bufferSize: number;
}
