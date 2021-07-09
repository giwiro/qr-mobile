import * as Updates from 'expo-updates';

export type Environment = 'development' | 'production';

export function getEnvironment(): Environment {
  if (Updates.releaseChannel.startsWith('prod')) {
    return 'production';
  }
  return 'development';
}
