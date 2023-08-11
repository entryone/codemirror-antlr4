// Generated from ./src/MathCalculator/MathCalculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MathCalculatorLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly SUM = 32;
	public static readonly AVG = 33;
	public static readonly AVG_INC = 34;
	public static readonly FUNCTIONS = 35;
	public static readonly LP = 36;
	public static readonly RP = 37;
	public static readonly COMMA = 38;
	public static readonly NUMBER = 39;
	public static readonly INT = 40;
	public static readonly DIM_BY_NAME = 41;
	public static readonly DIM_REF = 42;
	public static readonly CELL_LOCATOR_S = 43;
	public static readonly CELL_LOCATOR_O = 44;
	public static readonly WS = 45;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "SUM", "AVG", "AVG_INC", 
		"FUNCTIONS", "LP", "RP", "COMMA", "NUMBER", "INT", "DIM_BY_NAME", "DIM_REF", 
		"CELL_LOCATOR_S", "CELL_LOCATOR_O", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'REF'", "'REF_O'", "'AVG.EXC'", "'MIN'", "'MAX'", "'CUMULATE'", 
		"'ABS'", "'XXX'", "'VPT'", "'CNT'", "'HPT'", "'VOL'", "'MEAN'", "'BASE'", 
		"'UBASE'", "'RANK'", "'PERCENTRANK'", "'AVG.P'", "'COUNT'", "'Max.Label'", 
		"'Stat.Base'", "'Unweighted.Base'", "'Weighted.Avg'", "'ROUND'", "';'", 
		"'-'", "'CORR'", "'CELL'", "'*'", "'/'", "'+'", "'SUM'", "'AVG'", "'AVG.INC'", 
		undefined, "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "SUM", "AVG", "AVG_INC", "FUNCTIONS", 
		"LP", "RP", "COMMA", "NUMBER", "INT", "DIM_BY_NAME", "DIM_REF", "CELL_LOCATOR_S", 
		"CELL_LOCATOR_O", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MathCalculatorLexer._LITERAL_NAMES, MathCalculatorLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MathCalculatorLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MathCalculatorLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MathCalculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return MathCalculatorLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MathCalculatorLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MathCalculatorLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MathCalculatorLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02/\u0183\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"" +
		"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x05$\u0123" +
		"\n$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x06(\u012C\n(\r(\x0E(\u012D\x03" +
		"(\x03(\x07(\u0132\n(\f(\x0E(\u0135\v(\x03)\x06)\u0138\n)\r)\x0E)\u0139" +
		"\x03*\x03*\x06*\u013E\n*\r*\x0E*\u013F\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x06+\u014A\n+\r+\x0E+\u014B\x03+\x03+\x03+\x03+\x03+\x03,\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x05,\u0165\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u017B\n" +
		"-\x03.\x06.\u017E\n.\r.\x0E.\u017F\x03.\x03.\x02\x02\x02/\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
		"/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
		"?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U" +
		"\x02,W\x02-Y\x02.[\x02/\x03\x02\x06\x03\x022;\b\x02\f\f\x0F\x0F$$*+.." +
		"==\n\x02\f\f\x0F\x0F$$*+..==]]__\x05\x02\v\f\x0F\x0F\"\"\x02\u018F\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
		"\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
		"\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03" +
		"\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02" +
		"\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02" +
		"C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02" +
		"\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02" +
		"\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03" +
		"\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x03]\x03\x02\x02" +
		"\x02\x05a\x03\x02\x02\x02\x07g\x03\x02\x02\x02\to\x03\x02\x02\x02\vs\x03" +
		"\x02\x02\x02\rw\x03\x02\x02\x02\x0F\x80\x03\x02\x02\x02\x11\x84\x03\x02" +
		"\x02\x02\x13\x88\x03\x02\x02\x02\x15\x8C\x03\x02\x02\x02\x17\x90\x03\x02" +
		"\x02\x02\x19\x94\x03\x02\x02\x02\x1B\x98\x03\x02\x02\x02\x1D\x9D\x03\x02" +
		"\x02\x02\x1F\xA2\x03\x02\x02\x02!\xA8\x03\x02\x02\x02#\xAD\x03\x02\x02" +
		"\x02%\xB9\x03\x02\x02\x02\'\xBF\x03\x02\x02\x02)\xC5\x03\x02\x02\x02+" +
		"\xCF\x03\x02\x02\x02-\xD9\x03\x02\x02\x02/\xE9\x03\x02\x02\x021\xF6\x03" +
		"\x02\x02\x023\xFC\x03\x02\x02\x025\xFE\x03\x02\x02\x027\u0100\x03\x02" +
		"\x02\x029\u0105\x03\x02\x02\x02;\u010A\x03\x02\x02\x02=\u010C\x03\x02" +
		"\x02\x02?\u010E\x03\x02\x02\x02A\u0110\x03\x02\x02\x02C\u0114\x03\x02" +
		"\x02\x02E\u0118\x03\x02\x02\x02G\u0122\x03\x02\x02\x02I\u0124\x03\x02" +
		"\x02\x02K\u0126\x03\x02\x02\x02M\u0128\x03\x02\x02\x02O\u012B\x03\x02" +
		"\x02\x02Q\u0137\x03\x02\x02\x02S\u013B\x03\x02\x02\x02U\u0143\x03\x02" +
		"\x02\x02W\u0164\x03\x02\x02\x02Y\u017A\x03\x02\x02\x02[\u017D\x03\x02" +
		"\x02\x02]^\x07T\x02\x02^_\x07G\x02\x02_`\x07H\x02\x02`\x04\x03\x02\x02" +
		"\x02ab\x07T\x02\x02bc\x07G\x02\x02cd\x07H\x02\x02de\x07a\x02\x02ef\x07" +
		"Q\x02\x02f\x06\x03\x02\x02\x02gh\x07C\x02\x02hi\x07X\x02\x02ij\x07I\x02" +
		"\x02jk\x070\x02\x02kl\x07G\x02\x02lm\x07Z\x02\x02mn\x07E\x02\x02n\b\x03" +
		"\x02\x02\x02op\x07O\x02\x02pq\x07K\x02\x02qr\x07P\x02\x02r\n\x03\x02\x02" +
		"\x02st\x07O\x02\x02tu\x07C\x02\x02uv\x07Z\x02\x02v\f\x03\x02\x02\x02w" +
		"x\x07E\x02\x02xy\x07W\x02\x02yz\x07O\x02\x02z{\x07W\x02\x02{|\x07N\x02" +
		"\x02|}\x07C\x02\x02}~\x07V\x02\x02~\x7F\x07G\x02\x02\x7F\x0E\x03\x02\x02" +
		"\x02\x80\x81\x07C\x02\x02\x81\x82\x07D\x02\x02\x82\x83\x07U\x02\x02\x83" +
		"\x10\x03\x02\x02\x02\x84\x85\x07Z\x02\x02\x85\x86\x07Z\x02\x02\x86\x87" +
		"\x07Z\x02\x02\x87\x12\x03\x02\x02\x02\x88\x89\x07X\x02\x02\x89\x8A\x07" +
		"R\x02\x02\x8A\x8B\x07V\x02\x02\x8B\x14\x03\x02\x02\x02\x8C\x8D\x07E\x02" +
		"\x02\x8D\x8E\x07P\x02\x02\x8E\x8F\x07V\x02\x02\x8F\x16\x03\x02\x02\x02" +
		"\x90\x91\x07J\x02\x02\x91\x92\x07R\x02\x02\x92\x93\x07V\x02\x02\x93\x18" +
		"\x03\x02\x02\x02\x94\x95\x07X\x02\x02\x95\x96\x07Q\x02\x02\x96\x97\x07" +
		"N\x02\x02\x97\x1A\x03\x02\x02\x02\x98\x99\x07O\x02\x02\x99\x9A\x07G\x02" +
		"\x02\x9A\x9B\x07C\x02\x02\x9B\x9C\x07P\x02\x02\x9C\x1C\x03\x02\x02\x02" +
		"\x9D\x9E\x07D\x02\x02\x9E\x9F\x07C\x02\x02\x9F\xA0\x07U\x02\x02\xA0\xA1" +
		"\x07G\x02\x02\xA1\x1E\x03\x02\x02\x02\xA2\xA3\x07W\x02\x02\xA3\xA4\x07" +
		"D\x02\x02\xA4\xA5\x07C\x02\x02\xA5\xA6\x07U\x02\x02\xA6\xA7\x07G\x02\x02" +
		"\xA7 \x03\x02\x02\x02\xA8\xA9\x07T\x02\x02\xA9\xAA\x07C\x02\x02\xAA\xAB" +
		"\x07P\x02\x02\xAB\xAC\x07M\x02\x02\xAC\"\x03\x02\x02\x02\xAD\xAE\x07R" +
		"\x02\x02\xAE\xAF\x07G\x02\x02\xAF\xB0\x07T\x02\x02\xB0\xB1\x07E\x02\x02" +
		"\xB1\xB2\x07G\x02\x02\xB2\xB3\x07P\x02\x02\xB3\xB4\x07V\x02\x02\xB4\xB5" +
		"\x07T\x02\x02\xB5\xB6\x07C\x02\x02\xB6\xB7\x07P\x02\x02\xB7\xB8\x07M\x02" +
		"\x02\xB8$\x03\x02\x02\x02\xB9\xBA\x07C\x02\x02\xBA\xBB\x07X\x02\x02\xBB" +
		"\xBC\x07I\x02\x02\xBC\xBD\x070\x02\x02\xBD\xBE\x07R\x02\x02\xBE&\x03\x02" +
		"\x02\x02\xBF\xC0\x07E\x02\x02\xC0\xC1\x07Q\x02\x02\xC1\xC2\x07W\x02\x02" +
		"\xC2\xC3\x07P\x02\x02\xC3\xC4\x07V\x02\x02\xC4(\x03\x02\x02\x02\xC5\xC6" +
		"\x07O\x02\x02\xC6\xC7\x07c\x02\x02\xC7\xC8\x07z\x02\x02\xC8\xC9\x070\x02" +
		"\x02\xC9\xCA\x07N\x02\x02\xCA\xCB\x07c\x02\x02\xCB\xCC\x07d\x02\x02\xCC" +
		"\xCD\x07g\x02\x02\xCD\xCE\x07n\x02\x02\xCE*\x03\x02\x02\x02\xCF\xD0\x07" +
		"U\x02\x02\xD0\xD1\x07v\x02\x02\xD1\xD2\x07c\x02\x02\xD2\xD3\x07v\x02\x02" +
		"\xD3\xD4\x070\x02\x02\xD4\xD5\x07D\x02\x02\xD5\xD6\x07c\x02\x02\xD6\xD7" +
		"\x07u\x02\x02\xD7\xD8\x07g\x02\x02\xD8,\x03\x02\x02\x02\xD9\xDA\x07W\x02" +
		"\x02\xDA\xDB\x07p\x02\x02\xDB\xDC\x07y\x02\x02\xDC\xDD\x07g\x02\x02\xDD" +
		"\xDE\x07k\x02\x02\xDE\xDF\x07i\x02\x02\xDF\xE0\x07j\x02\x02\xE0\xE1\x07" +
		"v\x02\x02\xE1\xE2\x07g\x02\x02\xE2\xE3\x07f\x02\x02\xE3\xE4\x070\x02\x02" +
		"\xE4\xE5\x07D\x02\x02\xE5\xE6\x07c\x02\x02\xE6\xE7\x07u\x02\x02\xE7\xE8" +
		"\x07g\x02\x02\xE8.\x03\x02\x02\x02\xE9\xEA\x07Y\x02\x02\xEA\xEB\x07g\x02" +
		"\x02\xEB\xEC\x07k\x02\x02\xEC\xED\x07i\x02\x02\xED\xEE\x07j\x02\x02\xEE" +
		"\xEF\x07v\x02\x02\xEF\xF0\x07g\x02\x02\xF0\xF1\x07f\x02\x02\xF1\xF2\x07" +
		"0\x02\x02\xF2\xF3\x07C\x02\x02\xF3\xF4\x07x\x02\x02\xF4\xF5\x07i\x02\x02" +
		"\xF50\x03\x02\x02\x02\xF6\xF7\x07T\x02\x02\xF7\xF8\x07Q\x02\x02\xF8\xF9" +
		"\x07W\x02\x02\xF9\xFA\x07P\x02\x02\xFA\xFB\x07F\x02\x02\xFB2\x03\x02\x02" +
		"\x02\xFC\xFD\x07=\x02\x02\xFD4\x03\x02\x02\x02\xFE\xFF\x07/\x02\x02\xFF" +
		"6\x03\x02\x02\x02\u0100\u0101\x07E\x02\x02\u0101\u0102\x07Q\x02\x02\u0102" +
		"\u0103\x07T\x02\x02\u0103\u0104\x07T\x02\x02\u01048\x03\x02\x02\x02\u0105" +
		"\u0106\x07E\x02\x02\u0106\u0107\x07G\x02\x02\u0107\u0108\x07N\x02\x02" +
		"\u0108\u0109\x07N\x02\x02\u0109:\x03\x02\x02\x02\u010A\u010B\x07,\x02" +
		"\x02\u010B<\x03\x02\x02\x02\u010C\u010D\x071\x02\x02\u010D>\x03\x02\x02" +
		"\x02\u010E\u010F\x07-\x02\x02\u010F@\x03\x02\x02\x02\u0110\u0111\x07U" +
		"\x02\x02\u0111\u0112\x07W\x02\x02\u0112\u0113\x07O\x02\x02\u0113B\x03" +
		"\x02\x02\x02\u0114\u0115\x07C\x02\x02\u0115\u0116\x07X\x02\x02\u0116\u0117" +
		"\x07I\x02\x02\u0117D\x03\x02\x02\x02\u0118\u0119\x07C\x02\x02\u0119\u011A" +
		"\x07X\x02\x02\u011A\u011B\x07I\x02\x02\u011B\u011C\x070\x02\x02\u011C" +
		"\u011D\x07K\x02\x02\u011D\u011E\x07P\x02\x02\u011E\u011F\x07E\x02\x02" +
		"\u011FF\x03\x02\x02\x02\u0120\u0123\x05A!\x02\u0121\u0123\x05C\"\x02\u0122" +
		"\u0120\x03\x02\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123H\x03\x02\x02" +
		"\x02\u0124\u0125\x07*\x02\x02\u0125J\x03\x02\x02\x02\u0126\u0127\x07+" +
		"\x02\x02\u0127L\x03\x02\x02\x02\u0128\u0129\x07.\x02\x02\u0129N\x03\x02" +
		"\x02\x02\u012A\u012C\t\x02\x02\x02\u012B\u012A\x03\x02\x02\x02\u012C\u012D" +
		"\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02" +
		"\u012E\u012F\x03\x02\x02\x02\u012F\u0133\x070\x02\x02\u0130\u0132\t\x02" +
		"\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134P\x03\x02\x02" +
		"\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0138\t\x02\x02\x02\u0137\u0136" +
		"\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02" +
		"\u0139\u013A\x03\x02\x02\x02\u013AR\x03\x02\x02\x02\u013B\u013D\x07$\x02" +
		"\x02\u013C\u013E\n\x03\x02\x02\u013D\u013C\x03\x02\x02\x02\u013E\u013F" +
		"\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02" +
		"\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x07$\x02\x02\u0142T\x03\x02\x02" +
		"\x02\u0143\u0144\x07^\x02\x02\u0144\u0145\x07]\x02\x02\u0145\u0146\x07" +
		"^\x02\x02\u0146\u0147\x07]\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u014A" +
		"\n\x04\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03" +
		"\x02\x02\x02\u014D\u014E\x07^\x02\x02\u014E\u014F\x07_\x02\x02\u014F\u0150" +
		"\x07^\x02\x02\u0150\u0151\x07_\x02\x02\u0151V\x03\x02\x02\x02\u0152\u0153" +
		"\x07H\x02\x02\u0153\u0154\x07K\x02\x02\u0154\u0155\x07T\x02\x02\u0155" +
		"\u0156\x07U\x02\x02\u0156\u0165\x07V\x02\x02\u0157\u0158\x07N\x02\x02" +
		"\u0158\u0159\x07C\x02\x02\u0159\u015A\x07U\x02\x02\u015A\u0165\x07V\x02" +
		"\x02\u015B\u015C\x07T\x02\x02\u015C\u015D\x07G\x02\x02\u015D\u015E\x07" +
		"H\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x05I%\x02\u0160\u0161" +
		"\x05U+\x02\u0161\u0162\x05K&\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0165" +
		"\x05U+\x02\u0164\u0152\x03\x02\x02\x02\u0164\u0157\x03\x02\x02\x02\u0164" +
		"\u015B\x03\x02\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165X\x03\x02\x02" +
		"\x02\u0166\u0167\x07H\x02\x02\u0167\u0168\x07K\x02\x02\u0168\u0169\x07" +
		"T\x02\x02\u0169\u016A\x07U\x02\x02\u016A\u017B\x07V\x02\x02\u016B\u016C" +
		"\x07N\x02\x02\u016C\u016D\x07C\x02\x02\u016D\u016E\x07U\x02\x02\u016E" +
		"\u017B\x07V\x02\x02\u016F\u0170\x07T\x02\x02\u0170\u0171\x07G\x02\x02" +
		"\u0171\u0172\x07H\x02\x02\u0172\u0173\x07a\x02\x02\u0173\u0174\x07Q\x02" +
		"\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x05I%\x02\u0176\u0177\x05" +
		"U+\x02\u0177\u0178\x05K&\x02\u0178\u017B\x03\x02\x02\x02\u0179\u017B\x05" +
		"U+\x02\u017A\u0166\x03\x02\x02\x02\u017A\u016B\x03\x02\x02\x02\u017A\u016F" +
		"\x03\x02\x02\x02\u017A\u0179\x03\x02\x02\x02\u017BZ\x03\x02\x02\x02\u017C" +
		"\u017E\t\x05\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02" +
		"\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181" +
		"\x03\x02\x02\x02\u0181\u0182\b.\x02\x02\u0182\\\x03\x02\x02\x02\f\x02" +
		"\u0122\u012D\u0133\u0139\u013F\u014B\u0164\u017A\u017F\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MathCalculatorLexer.__ATN) {
			MathCalculatorLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MathCalculatorLexer._serializedATN));
		}

		return MathCalculatorLexer.__ATN;
	}

}

