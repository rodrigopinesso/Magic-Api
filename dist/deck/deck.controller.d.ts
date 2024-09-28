import { Deck } from './schemas/deck.schema';
import { DeckService } from './deck.service';
import { createDeckDto } from './dto/create-deck-dto';
import { updateDeckDto } from './dto/update-deck-dto';
export declare class DeckController {
    private deckService;
    constructor(deckService: DeckService);
    getCommander(name: string): Promise<any>;
    createDeckWithCommander(commanderName: string, deckName: string): Promise<Deck>;
    getAllDecks(): Promise<Deck[]>;
    createDeck(deck: createDeckDto): Promise<Deck>;
    getDeckById(id: string): Promise<Deck>;
    updateDeck(id: string, deck: updateDeckDto): Promise<Deck>;
    deleteDeck(id: string): Promise<Deck>;
}
