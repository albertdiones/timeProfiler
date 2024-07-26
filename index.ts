import { Logger } from "add_logger";
import { Model } from "mongoose";
import { profileLog } from "./profileLogSchema";


const defaultLogger = new Logger('time_profiler');
export function profile(callback: () => Promise<any>, options: {label?: string, logger?: Logger, profileLogSchema?: Model<any> } = {}): Promise<any> {
    const {
        label = 'unlabeled',
        logger = defaultLogger,
        profileLogSchema = profileLog
    } = options;
    const startTime = Date.now();
    return callback()
        .then(
            (results) => {
                const endTime = Date.now();
                const timeElapse = endTime - startTime;
                logger.info(label, 'time elapsed:', timeElapse);
                new profileLogSchema(
                    {
                        label,
                        time_elapsed: timeElapse
                    }
                ).save();
                return results;
            }
        );
}