// Generated from ./src/MathCalculator/MathCalculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MathCalculatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MathCalculatorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `index`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleValue`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleValue?: (ctx: DoubleValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `sameRef`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSameRef?: (ctx: SameRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `oppositeRef`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOppositeRef?: (ctx: OppositeRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `regular`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegular?: (ctx: RegularContext) => Result;

	/**
	 * Visit a parse tree produced by the `single`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle?: (ctx: SingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `legacy`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLegacy?: (ctx: LegacyContext) => Result;

	/**
	 * Visit a parse tree produced by the `round`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRound?: (ctx: RoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `corr`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCorr?: (ctx: CorrContext) => Result;

	/**
	 * Visit a parse tree produced by the `cell`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell?: (ctx: CellContext) => Result;

	/**
	 * Visit a parse tree produced by the `paren`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParen?: (ctx: ParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `math`
	 * labeled alternative in `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMath?: (ctx: MathContext) => Result;

	/**
	 * Visit a parse tree produced by `MathCalculatorParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `MathCalculatorParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

