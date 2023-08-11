// Generated from ./src/MathCalculator/MathCalculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IndexContext } from "./MathCalculatorParser";
import { DoubleValueContext } from "./MathCalculatorParser";
import { SameRefContext } from "./MathCalculatorParser";
import { OppositeRefContext } from "./MathCalculatorParser";
import { RegularContext } from "./MathCalculatorParser";
import { SingleContext } from "./MathCalculatorParser";
import { LegacyContext } from "./MathCalculatorParser";
import { RoundContext } from "./MathCalculatorParser";
import { CorrContext } from "./MathCalculatorParser";
import { CellContext } from "./MathCalculatorParser";
import { ParenContext } from "./MathCalculatorParser";
import { MathContext } from "./MathCalculatorParser";
import { StartContext } from "./MathCalculatorParser";
import { ExprContext } from "./MathCalculatorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MathCalculatorParser`.
 */
export interface MathCalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `index`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIndex?: (ctx: IndexContext) => void;
	/**
	 * Exit a parse tree produced by the `index`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIndex?: (ctx: IndexContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleValue`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDoubleValue?: (ctx: DoubleValueContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleValue`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDoubleValue?: (ctx: DoubleValueContext) => void;

	/**
	 * Enter a parse tree produced by the `sameRef`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSameRef?: (ctx: SameRefContext) => void;
	/**
	 * Exit a parse tree produced by the `sameRef`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSameRef?: (ctx: SameRefContext) => void;

	/**
	 * Enter a parse tree produced by the `oppositeRef`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterOppositeRef?: (ctx: OppositeRefContext) => void;
	/**
	 * Exit a parse tree produced by the `oppositeRef`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitOppositeRef?: (ctx: OppositeRefContext) => void;

	/**
	 * Enter a parse tree produced by the `regular`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRegular?: (ctx: RegularContext) => void;
	/**
	 * Exit a parse tree produced by the `regular`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRegular?: (ctx: RegularContext) => void;

	/**
	 * Enter a parse tree produced by the `single`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSingle?: (ctx: SingleContext) => void;
	/**
	 * Exit a parse tree produced by the `single`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSingle?: (ctx: SingleContext) => void;

	/**
	 * Enter a parse tree produced by the `legacy`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLegacy?: (ctx: LegacyContext) => void;
	/**
	 * Exit a parse tree produced by the `legacy`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLegacy?: (ctx: LegacyContext) => void;

	/**
	 * Enter a parse tree produced by the `round`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRound?: (ctx: RoundContext) => void;
	/**
	 * Exit a parse tree produced by the `round`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRound?: (ctx: RoundContext) => void;

	/**
	 * Enter a parse tree produced by the `corr`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCorr?: (ctx: CorrContext) => void;
	/**
	 * Exit a parse tree produced by the `corr`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCorr?: (ctx: CorrContext) => void;

	/**
	 * Enter a parse tree produced by the `cell`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCell?: (ctx: CellContext) => void;
	/**
	 * Exit a parse tree produced by the `cell`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCell?: (ctx: CellContext) => void;

	/**
	 * Enter a parse tree produced by the `paren`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParen?: (ctx: ParenContext) => void;
	/**
	 * Exit a parse tree produced by the `paren`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParen?: (ctx: ParenContext) => void;

	/**
	 * Enter a parse tree produced by the `math`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMath?: (ctx: MathContext) => void;
	/**
	 * Exit a parse tree produced by the `math`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMath?: (ctx: MathContext) => void;

	/**
	 * Enter a parse tree produced by `MathCalculatorParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `MathCalculatorParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

