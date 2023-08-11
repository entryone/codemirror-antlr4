// Generated from ./src/MathCalculator/MathCalculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MathCalculatorListener } from "./MathCalculatorListener";
import { MathCalculatorVisitor } from "./MathCalculatorVisitor";


export class MathCalculatorParser extends Parser {
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
	public static readonly RULE_start = 0;
	public static readonly RULE_expr = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expr",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MathCalculatorParser._LITERAL_NAMES, MathCalculatorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MathCalculatorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MathCalculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return MathCalculatorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MathCalculatorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MathCalculatorParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MathCalculatorParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4;
			this.expr(0);
			this.state = 5;
			this.match(MathCalculatorParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, MathCalculatorParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new IndexContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 8;
				this.match(MathCalculatorParser.INT);
				}
				break;

			case 2:
				{
				_localctx = new DoubleValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 9;
				this.match(MathCalculatorParser.NUMBER);
				}
				break;

			case 3:
				{
				_localctx = new SameRefContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 10;
				(_localctx as SameRefContext)._name = this.match(MathCalculatorParser.T__0);
				this.state = 11;
				this.match(MathCalculatorParser.LP);
				this.state = 12;
				this.match(MathCalculatorParser.DIM_REF);
				this.state = 13;
				this.match(MathCalculatorParser.RP);
				}
				break;

			case 4:
				{
				_localctx = new OppositeRefContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 14;
				(_localctx as OppositeRefContext)._name = this.match(MathCalculatorParser.T__1);
				this.state = 15;
				this.match(MathCalculatorParser.LP);
				this.state = 16;
				this.match(MathCalculatorParser.DIM_REF);
				this.state = 17;
				this.match(MathCalculatorParser.RP);
				}
				break;

			case 5:
				{
				_localctx = new RegularContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 18;
				(_localctx as RegularContext)._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (MathCalculatorParser.T__2 - 3)) | (1 << (MathCalculatorParser.T__3 - 3)) | (1 << (MathCalculatorParser.T__4 - 3)) | (1 << (MathCalculatorParser.T__5 - 3)) | (1 << (MathCalculatorParser.SUM - 3)) | (1 << (MathCalculatorParser.AVG - 3)) | (1 << (MathCalculatorParser.AVG_INC - 3)))) !== 0))) {
					(_localctx as RegularContext)._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 19;
				this.match(MathCalculatorParser.LP);
				this.state = 20;
				this.expr(0);
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MathCalculatorParser.COMMA) {
					{
					{
					this.state = 21;
					this.match(MathCalculatorParser.COMMA);
					this.state = 22;
					this.expr(0);
					}
					}
					this.state = 27;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 28;
				this.match(MathCalculatorParser.RP);
				}
				break;

			case 6:
				{
				_localctx = new SingleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 30;
				(_localctx as SingleContext)._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MathCalculatorParser.T__5) | (1 << MathCalculatorParser.T__6) | (1 << MathCalculatorParser.T__7) | (1 << MathCalculatorParser.T__8) | (1 << MathCalculatorParser.T__9) | (1 << MathCalculatorParser.T__10) | (1 << MathCalculatorParser.T__11) | (1 << MathCalculatorParser.T__12) | (1 << MathCalculatorParser.T__13) | (1 << MathCalculatorParser.T__14) | (1 << MathCalculatorParser.T__15) | (1 << MathCalculatorParser.T__16))) !== 0))) {
					(_localctx as SingleContext)._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 31;
				this.match(MathCalculatorParser.LP);
				this.state = 32;
				this.expr(0);
				this.state = 33;
				this.match(MathCalculatorParser.RP);
				}
				break;

			case 7:
				{
				_localctx = new LegacyContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 35;
				(_localctx as LegacyContext)._name = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (MathCalculatorParser.T__3 - 4)) | (1 << (MathCalculatorParser.T__4 - 4)) | (1 << (MathCalculatorParser.T__17 - 4)) | (1 << (MathCalculatorParser.T__18 - 4)) | (1 << (MathCalculatorParser.T__19 - 4)) | (1 << (MathCalculatorParser.T__20 - 4)) | (1 << (MathCalculatorParser.T__21 - 4)) | (1 << (MathCalculatorParser.T__22 - 4)) | (1 << (MathCalculatorParser.SUM - 4)) | (1 << (MathCalculatorParser.AVG - 4)))) !== 0))) {
					(_localctx as LegacyContext)._name = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 8:
				{
				_localctx = new RoundContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 36;
				(_localctx as RoundContext)._name = this.match(MathCalculatorParser.T__23);
				this.state = 37;
				this.match(MathCalculatorParser.LP);
				this.state = 38;
				this.expr(0);
				this.state = 39;
				_la = this._input.LA(1);
				if (!(_la === MathCalculatorParser.T__24 || _la === MathCalculatorParser.COMMA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MathCalculatorParser.T__25) {
					{
					this.state = 40;
					(_localctx as RoundContext)._sign = this.match(MathCalculatorParser.T__25);
					}
				}

				this.state = 43;
				(_localctx as RoundContext)._precision = this.match(MathCalculatorParser.INT);
				this.state = 44;
				this.match(MathCalculatorParser.RP);
				}
				break;

			case 9:
				{
				_localctx = new CorrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 46;
				(_localctx as CorrContext)._name = this.match(MathCalculatorParser.T__26);
				this.state = 47;
				this.match(MathCalculatorParser.LP);
				this.state = 48;
				this.match(MathCalculatorParser.CELL_LOCATOR_O);
				this.state = 49;
				this.match(MathCalculatorParser.RP);
				}
				break;

			case 10:
				{
				_localctx = new CellContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 50;
				(_localctx as CellContext)._name = this.match(MathCalculatorParser.T__27);
				this.state = 51;
				this.match(MathCalculatorParser.LP);
				this.state = 52;
				(_localctx as CellContext)._row = this.match(MathCalculatorParser.CELL_LOCATOR_S);
				this.state = 53;
				this.match(MathCalculatorParser.COMMA);
				this.state = 54;
				(_localctx as CellContext)._col = this.match(MathCalculatorParser.CELL_LOCATOR_O);
				this.state = 55;
				this.match(MathCalculatorParser.RP);
				}
				break;

			case 11:
				{
				_localctx = new ParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 56;
				this.match(MathCalculatorParser.LP);
				this.state = 57;
				(_localctx as ParenContext)._inner = this.expr(0);
				this.state = 58;
				this.match(MathCalculatorParser.RP);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 70;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 68;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new MathContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MathContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, MathCalculatorParser.RULE_expr);
						this.state = 62;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 63;
						(_localctx as MathContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === MathCalculatorParser.T__28 || _la === MathCalculatorParser.T__29)) {
							(_localctx as MathContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 64;
						(_localctx as MathContext)._right = this.expr(3);
						}
						break;

					case 2:
						{
						_localctx = new MathContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MathContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, MathCalculatorParser.RULE_expr);
						this.state = 65;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 66;
						(_localctx as MathContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === MathCalculatorParser.T__25 || _la === MathCalculatorParser.T__30)) {
							(_localctx as MathContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 67;
						(_localctx as MathContext)._right = this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/L\x04\x02\t\x02" +
		"\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03,\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03?\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03G\n\x03\f\x03\x0E\x03J\v\x03\x03\x03" +
		"\x02\x02\x03\x04\x04\x02\x02\x04\x02\x02\b\x04\x02\x05\b\"$\x03\x02\b" +
		"\x13\x05\x02\x06\x07\x14\x19\"#\x04\x02\x1B\x1B((\x03\x02\x1F \x04\x02" +
		"\x1C\x1C!!\x02W\x02\x06\x03\x02\x02\x02\x04>\x03\x02\x02\x02\x06\x07\x05" +
		"\x04\x03\x02\x07\b\x07\x02\x02\x03\b\x03\x03\x02\x02\x02\t\n\b\x03\x01" +
		"\x02\n?\x07*\x02\x02\v?\x07)\x02\x02\f\r\x07\x03\x02\x02\r\x0E\x07&\x02" +
		"\x02\x0E\x0F\x07,\x02\x02\x0F?\x07\'\x02\x02\x10\x11\x07\x04\x02\x02\x11" +
		"\x12\x07&\x02\x02\x12\x13\x07,\x02\x02\x13?\x07\'\x02\x02\x14\x15\t\x02" +
		"\x02\x02\x15\x16\x07&\x02\x02\x16\x1B\x05\x04\x03\x02\x17\x18\x07(\x02" +
		"\x02\x18\x1A\x05\x04\x03\x02\x19\x17\x03\x02\x02\x02\x1A\x1D\x03\x02\x02" +
		"\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02" +
		"\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x07\'\x02\x02\x1F?\x03\x02\x02\x02" +
		" !\t\x03\x02\x02!\"\x07&\x02\x02\"#\x05\x04\x03\x02#$\x07\'\x02\x02$?" +
		"\x03\x02\x02\x02%?\t\x04\x02\x02&\'\x07\x1A\x02\x02\'(\x07&\x02\x02()" +
		"\x05\x04\x03\x02)+\t\x05\x02\x02*,\x07\x1C\x02\x02+*\x03\x02\x02\x02+" +
		",\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x07*\x02\x02./\x07\'\x02\x02/?\x03" +
		"\x02\x02\x0201\x07\x1D\x02\x0212\x07&\x02\x0223\x07.\x02\x023?\x07\'\x02" +
		"\x0245\x07\x1E\x02\x0256\x07&\x02\x0267\x07-\x02\x0278\x07(\x02\x0289" +
		"\x07.\x02\x029?\x07\'\x02\x02:;\x07&\x02\x02;<\x05\x04\x03\x02<=\x07\'" +
		"\x02\x02=?\x03\x02\x02\x02>\t\x03\x02\x02\x02>\v\x03\x02\x02\x02>\f\x03" +
		"\x02\x02\x02>\x10\x03\x02\x02\x02>\x14\x03\x02\x02\x02> \x03\x02\x02\x02" +
		">%\x03\x02\x02\x02>&\x03\x02\x02\x02>0\x03\x02\x02\x02>4\x03\x02\x02\x02" +
		">:\x03\x02\x02\x02?H\x03\x02\x02\x02@A\f\x04\x02\x02AB\t\x06\x02\x02B" +
		"G\x05\x04\x03\x05CD\f\x03\x02\x02DE\t\x07\x02\x02EG\x05\x04\x03\x04F@" +
		"\x03\x02\x02\x02FC\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02I\x05\x03\x02\x02\x02JH\x03\x02\x02\x02\x07\x1B+>FH";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MathCalculatorParser.__ATN) {
			MathCalculatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MathCalculatorParser._serializedATN));
		}

		return MathCalculatorParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public EOF(): TerminalNode { return this.getToken(MathCalculatorParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MathCalculatorParser.RULE_start; }
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MathCalculatorParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IndexContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(MathCalculatorParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleValueContext extends ExprContext {
	public NUMBER(): TerminalNode { return this.getToken(MathCalculatorParser.NUMBER, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterDoubleValue) {
			listener.enterDoubleValue(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitDoubleValue) {
			listener.exitDoubleValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitDoubleValue) {
			return visitor.visitDoubleValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SameRefContext extends ExprContext {
	public _name!: Token;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public DIM_REF(): TerminalNode { return this.getToken(MathCalculatorParser.DIM_REF, 0); }
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterSameRef) {
			listener.enterSameRef(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitSameRef) {
			listener.exitSameRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitSameRef) {
			return visitor.visitSameRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OppositeRefContext extends ExprContext {
	public _name!: Token;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public DIM_REF(): TerminalNode { return this.getToken(MathCalculatorParser.DIM_REF, 0); }
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterOppositeRef) {
			listener.enterOppositeRef(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitOppositeRef) {
			listener.exitOppositeRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitOppositeRef) {
			return visitor.visitOppositeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RegularContext extends ExprContext {
	public _name!: Token;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(MathCalculatorParser.SUM, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(MathCalculatorParser.AVG, 0); }
	public AVG_INC(): TerminalNode | undefined { return this.tryGetToken(MathCalculatorParser.AVG_INC, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MathCalculatorParser.COMMA);
		} else {
			return this.getToken(MathCalculatorParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterRegular) {
			listener.enterRegular(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitRegular) {
			listener.exitRegular(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitRegular) {
			return visitor.visitRegular(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SingleContext extends ExprContext {
	public _name!: Token;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterSingle) {
			listener.enterSingle(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitSingle) {
			listener.exitSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitSingle) {
			return visitor.visitSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LegacyContext extends ExprContext {
	public _name!: Token;
	public SUM(): TerminalNode | undefined { return this.tryGetToken(MathCalculatorParser.SUM, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(MathCalculatorParser.AVG, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterLegacy) {
			listener.enterLegacy(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitLegacy) {
			listener.exitLegacy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitLegacy) {
			return visitor.visitLegacy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RoundContext extends ExprContext {
	public _name!: Token;
	public _sign!: Token;
	public _precision!: Token;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	public COMMA(): TerminalNode { return this.getToken(MathCalculatorParser.COMMA, 0); }
	public INT(): TerminalNode { return this.getToken(MathCalculatorParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterRound) {
			listener.enterRound(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitRound) {
			listener.exitRound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitRound) {
			return visitor.visitRound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CorrContext extends ExprContext {
	public _name!: Token;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public CELL_LOCATOR_O(): TerminalNode { return this.getToken(MathCalculatorParser.CELL_LOCATOR_O, 0); }
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterCorr) {
			listener.enterCorr(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitCorr) {
			listener.exitCorr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitCorr) {
			return visitor.visitCorr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CellContext extends ExprContext {
	public _name!: Token;
	public _row!: Token;
	public _col!: Token;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public COMMA(): TerminalNode { return this.getToken(MathCalculatorParser.COMMA, 0); }
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	public CELL_LOCATOR_S(): TerminalNode { return this.getToken(MathCalculatorParser.CELL_LOCATOR_S, 0); }
	public CELL_LOCATOR_O(): TerminalNode { return this.getToken(MathCalculatorParser.CELL_LOCATOR_O, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterCell) {
			listener.enterCell(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitCell) {
			listener.exitCell(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitCell) {
			return visitor.visitCell(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenContext extends ExprContext {
	public _inner!: ExprContext;
	public LP(): TerminalNode { return this.getToken(MathCalculatorParser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(MathCalculatorParser.RP, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterParen) {
			listener.enterParen(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitParen) {
			listener.exitParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitParen) {
			return visitor.visitParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MathContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MathCalculatorListener): void {
		if (listener.enterMath) {
			listener.enterMath(this);
		}
	}
	// @Override
	public exitRule(listener: MathCalculatorListener): void {
		if (listener.exitMath) {
			listener.exitMath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MathCalculatorVisitor<Result>): Result {
		if (visitor.visitMath) {
			return visitor.visitMath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


