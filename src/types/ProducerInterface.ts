export interface ProducerI {
    id: number;
    title: {
        rendered: string;
    }
    producer_name: string;
    producer_description: string;
    producer_country: string;
    _embedded?: {
        "wp-feauteredmedia"?: [
            {
                source_url: string; //URL till bilden
            }
        ]
    }
}