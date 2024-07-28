import { Logger } from "add_logger";
import { Model } from "mongoose";
import { profileLog } from "./profileLogSchema";


const defaultLogger = new Logger('time_profiler');
export function profile(callback: () => Promise<any>, options: {label?: string, logger?: Logger, profileLogSchema?: Model<any> } = {}): Promise<any> {
    const {
        label = 'unlabeled',
        logger = console,
        profileLogSchema = null
    } = options;

    const startTime: bigint = process.hrtime.bigint(); // [seconds, nanoseconds]

    return callback()
        .then(
            (results) => {

                const endTime: bigint = process.hrtime.bigint();    
                const timeElapseNano = endTime - startTime;

                const timeElapse = Number(timeElapseNano)/1000000;
                logger.info(label, 'time elapsed:', timeElapse,'ms');
                if (profileLogSchema) {
                    new profileLogSchema(
                        {
                            label,
                            time_elapsed: timeElapse
                        }
                    ).save();
                }
                return results;
            }
        );
}