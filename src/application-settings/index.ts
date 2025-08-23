/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#abuse_notification_email ApplicationSettings#abuse_notification_email}
  */
  readonly abuseNotificationEmail?: string;
  /**
  * Require administrators to enable Admin Mode by re-authenticating for administrative tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#admin_mode ApplicationSettings#admin_mode}
  */
  readonly adminMode?: boolean | cdktf.IResolvable;
  /**
  * Where to redirect users after logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#after_sign_out_path ApplicationSettings#after_sign_out_path}
  */
  readonly afterSignOutPath?: string;
  /**
  * Text shown to the user after signing up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#after_sign_up_text ApplicationSettings#after_sign_up_text}
  */
  readonly afterSignUpText?: string;
  /**
  * API key for Akismet spam protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#akismet_api_key ApplicationSettings#akismet_api_key}
  */
  readonly akismetApiKey?: string;
  /**
  * (If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#akismet_enabled ApplicationSettings#akismet_enabled}
  */
  readonly akismetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set to true to allow users to delete their accounts. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allow_account_deletion ApplicationSettings#allow_account_deletion}
  */
  readonly allowAccountDeletion?: boolean | cdktf.IResolvable;
  /**
  * Set to true to allow group owners to manage LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allow_group_owners_to_manage_ldap ApplicationSettings#allow_group_owners_to_manage_ldap}
  */
  readonly allowGroupOwnersToManageLdap?: boolean | cdktf.IResolvable;
  /**
  * Allow requests to the local network from system hooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allow_local_requests_from_system_hooks ApplicationSettings#allow_local_requests_from_system_hooks}
  */
  readonly allowLocalRequestsFromSystemHooks?: boolean | cdktf.IResolvable;
  /**
  * Allow requests to the local network from web hooks and services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allow_local_requests_from_web_hooks_and_services ApplicationSettings#allow_local_requests_from_web_hooks_and_services}
  */
  readonly allowLocalRequestsFromWebHooksAndServices?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether users assigned up to the Guest role can create groups and personal projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allow_project_creation_for_guest_and_below ApplicationSettings#allow_project_creation_for_guest_and_below}
  */
  readonly allowProjectCreationForGuestAndBelow?: boolean | cdktf.IResolvable;
  /**
  * Allow using a registration token to create a runner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allow_runner_registration_token ApplicationSettings#allow_runner_registration_token}
  */
  readonly allowRunnerRegistrationToken?: boolean | cdktf.IResolvable;
  /**
  * Set the duration for which the jobs are considered as old and expired. After that time passes, the jobs are archived and no longer able to be retried. Make it empty to never expire jobs. It has to be no less than 1 day, for example: 15 days, 1 month, 2 years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#archive_builds_in_human_readable ApplicationSettings#archive_builds_in_human_readable}
  */
  readonly archiveBuildsInHumanReadable?: string;
  /**
  * Maximum limit of AsciiDoc include directives being processed in any one document. Maximum: 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#asciidoc_max_includes ApplicationSettings#asciidoc_max_includes}
  */
  readonly asciidocMaxIncludes?: number;
  /**
  * Assets that match these domains are not proxied. Wildcards allowed. Your GitLab installation URL is automatically allowlisted. GitLab restart is required to apply changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#asset_proxy_allowlist ApplicationSettings#asset_proxy_allowlist}
  */
  readonly assetProxyAllowlist?: string[];
  /**
  * (If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#asset_proxy_enabled ApplicationSettings#asset_proxy_enabled}
  */
  readonly assetProxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Shared secret with the asset proxy server. GitLab restart is required to apply changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#asset_proxy_secret_key ApplicationSettings#asset_proxy_secret_key}
  */
  readonly assetProxySecretKey?: string;
  /**
  * URL of the asset proxy server. GitLab restart is required to apply changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#asset_proxy_url ApplicationSettings#asset_proxy_url}
  */
  readonly assetProxyUrl?: string;
  /**
  * By default, we write to the authorized_keys file to support Git over SSH without additional configuration. GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#authorized_keys_enabled ApplicationSettings#authorized_keys_enabled}
  */
  readonly authorizedKeysEnabled?: boolean | cdktf.IResolvable;
  /**
  * When enabled, users will get automatically banned from the application when they download more than the maximum number of unique projects in the time period specified by max_number_of_repository_downloads and max_number_of_repository_downloads_within_time_period respectively. Self-managed, Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#auto_ban_user_on_excessive_projects_download ApplicationSettings#auto_ban_user_on_excessive_projects_download}
  */
  readonly autoBanUserOnExcessiveProjectsDownload?: boolean | cdktf.IResolvable;
  /**
  * Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#auto_devops_domain ApplicationSettings#auto_devops_domain}
  */
  readonly autoDevopsDomain?: string;
  /**
  * Enable Auto DevOps for projects by default. It automatically builds, tests, and deploys applications based on a predefined CI/CD configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#auto_devops_enabled ApplicationSettings#auto_devops_enabled}
  */
  readonly autoDevopsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enabling this permits automatic allocation of purchased storage in a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#automatic_purchased_storage_allocation ApplicationSettings#automatic_purchased_storage_allocation}
  */
  readonly automaticPurchasedStorageAllocation?: boolean | cdktf.IResolvable;
  /**
  * Maximum simultaneous Direct Transfer batches to process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#bulk_import_concurrent_pipeline_batch_limit ApplicationSettings#bulk_import_concurrent_pipeline_batch_limit}
  */
  readonly bulkImportConcurrentPipelineBatchLimit?: number;
  /**
  * Enable migrating GitLab groups by direct transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#bulk_import_enabled ApplicationSettings#bulk_import_enabled}
  */
  readonly bulkImportEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum download file size when importing from source GitLab instances by direct transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#bulk_import_max_download_file_size ApplicationSettings#bulk_import_max_download_file_size}
  */
  readonly bulkImportMaxDownloadFileSize?: number;
  /**
  * Indicates whether users can create top-level groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#can_create_group ApplicationSettings#can_create_group}
  */
  readonly canCreateGroup?: boolean | cdktf.IResolvable;
  /**
  * Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#check_namespace_plan ApplicationSettings#check_namespace_plan}
  */
  readonly checkNamespacePlan?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of includes per pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#ci_max_includes ApplicationSettings#ci_max_includes}
  */
  readonly ciMaxIncludes?: number;
  /**
  * The maximum amount of memory, in bytes, that can be allocated for the pipeline configuration, with all included YAML configuration files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#ci_max_total_yaml_size_bytes ApplicationSettings#ci_max_total_yaml_size_bytes}
  */
  readonly ciMaxTotalYamlSizeBytes?: number;
  /**
  * Custom hostname (for private commit emails).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#commit_email_hostname ApplicationSettings#commit_email_hostname}
  */
  readonly commitEmailHostname?: string;
  /**
  * Maximum number of simultaneous import jobs for the Bitbucket Cloud importer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#concurrent_bitbucket_import_jobs_limit ApplicationSettings#concurrent_bitbucket_import_jobs_limit}
  */
  readonly concurrentBitbucketImportJobsLimit?: number;
  /**
  * Maximum number of simultaneous import jobs for the Bitbucket Server importer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#concurrent_bitbucket_server_import_jobs_limit ApplicationSettings#concurrent_bitbucket_server_import_jobs_limit}
  */
  readonly concurrentBitbucketServerImportJobsLimit?: number;
  /**
  * Maximum number of simultaneous import jobs for the GitHub importer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#concurrent_github_import_jobs_limit ApplicationSettings#concurrent_github_import_jobs_limit}
  */
  readonly concurrentGithubImportJobsLimit?: number;
  /**
  * Enable cleanup policies for all projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#container_expiration_policies_enable_historic_entries ApplicationSettings#container_expiration_policies_enable_historic_entries}
  */
  readonly containerExpirationPoliciesEnableHistoricEntries?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of tags that can be deleted in a single execution of cleanup policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#container_registry_cleanup_tags_service_max_list_size ApplicationSettings#container_registry_cleanup_tags_service_max_list_size}
  */
  readonly containerRegistryCleanupTagsServiceMaxListSize?: number;
  /**
  * The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#container_registry_delete_tags_service_timeout ApplicationSettings#container_registry_delete_tags_service_timeout}
  */
  readonly containerRegistryDeleteTagsServiceTimeout?: number;
  /**
  * Caching during the execution of cleanup policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#container_registry_expiration_policies_caching ApplicationSettings#container_registry_expiration_policies_caching}
  */
  readonly containerRegistryExpirationPoliciesCaching?: boolean | cdktf.IResolvable;
  /**
  * Number of workers for cleanup policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#container_registry_expiration_policies_worker_capacity ApplicationSettings#container_registry_expiration_policies_worker_capacity}
  */
  readonly containerRegistryExpirationPoliciesWorkerCapacity?: number;
  /**
  * Container Registry token duration in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#container_registry_token_expire_delay ApplicationSettings#container_registry_token_expire_delay}
  */
  readonly containerRegistryTokenExpireDelay?: number;
  /**
  * Enable automatic deactivation of dormant users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#deactivate_dormant_users ApplicationSettings#deactivate_dormant_users}
  */
  readonly deactivateDormantUsers?: boolean | cdktf.IResolvable;
  /**
  * Length of time (in days) after which a user is considered dormant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#deactivate_dormant_users_period ApplicationSettings#deactivate_dormant_users_period}
  */
  readonly deactivateDormantUsersPeriod?: number;
  /**
  * Default timeout for decompressing archived files, in seconds. Set to 0 to disable timeouts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#decompress_archive_file_timeout ApplicationSettings#decompress_archive_file_timeout}
  */
  readonly decompressArchiveFileTimeout?: number;
  /**
  * Set the default expiration time for each job’s artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_artifacts_expire_in ApplicationSettings#default_artifacts_expire_in}
  */
  readonly defaultArtifactsExpireIn?: string;
  /**
  * Instance-level custom initial branch name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_branch_name ApplicationSettings#default_branch_name}
  */
  readonly defaultBranchName?: string;
  /**
  * Determine if developers can push to the default branch. Can take: 0 (not protected, both users with the Developer role or Maintainer role can push new commits and force push), 1 (partially protected, users with the Developer role or Maintainer role can push new commits, but cannot force push) or 2 (fully protected, users with the Developer or Maintainer role cannot push new commits, but users with the Developer or Maintainer role can; no one can force push) as a parameter. Default is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_branch_protection ApplicationSettings#default_branch_protection}
  */
  readonly defaultBranchProtection?: number;
  /**
  * Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_ci_config_path ApplicationSettings#default_ci_config_path}
  */
  readonly defaultCiConfigPath?: string;
  /**
  * What visibility level new groups receive. Can take private, internal and public as a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_group_visibility ApplicationSettings#default_group_visibility}
  */
  readonly defaultGroupVisibility?: string;
  /**
  * Default preferred language for users who are not logged in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_preferred_language ApplicationSettings#default_preferred_language}
  */
  readonly defaultPreferredLanguage?: string;
  /**
  * Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_project_creation ApplicationSettings#default_project_creation}
  */
  readonly defaultProjectCreation?: number;
  /**
  * What visibility level new projects receive. Can take private, internal and public as a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_project_visibility ApplicationSettings#default_project_visibility}
  */
  readonly defaultProjectVisibility?: string;
  /**
  * Project limit per user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_projects_limit ApplicationSettings#default_projects_limit}
  */
  readonly defaultProjectsLimit?: number;
  /**
  * What visibility level new snippets receive. Can take private, internal and public as a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_snippet_visibility ApplicationSettings#default_snippet_visibility}
  */
  readonly defaultSnippetVisibility?: string;
  /**
  * Default syntax highlighting theme for users who are new or not signed in. See IDs of available themes (https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/themes.rb#L16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_syntax_highlighting_theme ApplicationSettings#default_syntax_highlighting_theme}
  */
  readonly defaultSyntaxHighlightingTheme?: number;
  /**
  * Enable inactive project deletion feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#delete_inactive_projects ApplicationSettings#delete_inactive_projects}
  */
  readonly deleteInactiveProjects?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether users who have not confirmed their email should be deleted. When set to true, unconfirmed users are deleted after unconfirmed_users_delete_after_days days. Self-managed, Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#delete_unconfirmed_users ApplicationSettings#delete_unconfirmed_users}
  */
  readonly deleteUnconfirmedUsers?: boolean | cdktf.IResolvable;
  /**
  * The number of days to wait before deleting a project or group that is marked for deletion. Value must be between 1 and 90.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#deletion_adjourned_period ApplicationSettings#deletion_adjourned_period}
  */
  readonly deletionAdjournedPeriod?: number;
  /**
  * (If enabled, requires diagramsnet_url) Enable Diagrams.net integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#diagramsnet_enabled ApplicationSettings#diagramsnet_enabled}
  */
  readonly diagramsnetEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Diagrams.net instance URL for integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#diagramsnet_url ApplicationSettings#diagramsnet_url}
  */
  readonly diagramsnetUrl?: string;
  /**
  * Maximum files in a diff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#diff_max_files ApplicationSettings#diff_max_files}
  */
  readonly diffMaxFiles?: number;
  /**
  * Maximum lines in a diff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#diff_max_lines ApplicationSettings#diff_max_lines}
  */
  readonly diffMaxLines?: number;
  /**
  * Maximum diff patch size, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#diff_max_patch_bytes ApplicationSettings#diff_max_patch_bytes}
  */
  readonly diffMaxPatchBytes?: number;
  /**
  * Stops administrators from connecting their GitLab accounts to non-trusted OAuth 2.0 applications that have the api, read_api, read_repository, write_repository, read_registry, write_registry, or sudo scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#disable_admin_oauth_scopes ApplicationSettings#disable_admin_oauth_scopes}
  */
  readonly disableAdminOauthScopes?: boolean | cdktf.IResolvable;
  /**
  * Disable display of RSS/Atom and calendar feed tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#disable_feed_token ApplicationSettings#disable_feed_token}
  */
  readonly disableFeedToken?: boolean | cdktf.IResolvable;
  /**
  * Disable personal access tokens. Self-managed, Premium and Ultimate only. There is no method available to enable a personal access token that’s been disabled through the API. This is a known issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#disable_personal_access_tokens ApplicationSettings#disable_personal_access_tokens}
  */
  readonly disablePersonalAccessTokens?: boolean | cdktf.IResolvable;
  /**
  * Disabled OAuth sign-in sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#disabled_oauth_sign_in_sources ApplicationSettings#disabled_oauth_sign_in_sources}
  */
  readonly disabledOauthSignInSources?: string[];
  /**
  * Enforce DNS rebinding attack protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#dns_rebinding_protection_enabled ApplicationSettings#dns_rebinding_protection_enabled}
  */
  readonly dnsRebindingProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Force people to use only corporate emails for sign-up. Null means there is no restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#domain_allowlist ApplicationSettings#domain_allowlist}
  */
  readonly domainAllowlist?: string[];
  /**
  * Users with email addresses that match these domains cannot sign up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#domain_denylist ApplicationSettings#domain_denylist}
  */
  readonly domainDenylist?: string[];
  /**
  * (If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#domain_denylist_enabled ApplicationSettings#domain_denylist_enabled}
  */
  readonly domainDenylistEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum downstream pipeline trigger rate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#downstream_pipeline_trigger_limit_per_project_user_sha ApplicationSettings#downstream_pipeline_trigger_limit_per_project_user_sha}
  */
  readonly downstreamPipelineTriggerLimitPerProjectUserSha?: number;
  /**
  * The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#dsa_key_restriction ApplicationSettings#dsa_key_restriction}
  */
  readonly dsaKeyRestriction?: number;
  /**
  * Indicates whether GitLab Duo features are enabled for this instance. Self-managed, Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#duo_features_enabled ApplicationSettings#duo_features_enabled}
  */
  readonly duoFeaturesEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum allowed curve size (in bits) of an uploaded ECDSA key. 0 means no restriction. -1 disables ECDSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#ecdsa_key_restriction ApplicationSettings#ecdsa_key_restriction}
  */
  readonly ecdsaKeyRestriction?: number;
  /**
  * The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key. 0 means no restriction. -1 disables ECDSA_SK keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#ecdsa_sk_key_restriction ApplicationSettings#ecdsa_sk_key_restriction}
  */
  readonly ecdsaSkKeyRestriction?: number;
  /**
  * The minimum allowed curve size (in bits) of an uploaded ED25519 key. 0 means no restriction. -1 disables ED25519 keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#ed25519_key_restriction ApplicationSettings#ed25519_key_restriction}
  */
  readonly ed25519KeyRestriction?: number;
  /**
  * The minimum allowed curve size (in bits) of an uploaded ED25519_SK key. 0 means no restriction. -1 disables ED25519_SK keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#ed25519_sk_key_restriction ApplicationSettings#ed25519_sk_key_restriction}
  */
  readonly ed25519SkKeyRestriction?: number;
  /**
  * AWS IAM access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#eks_access_key_id ApplicationSettings#eks_access_key_id}
  */
  readonly eksAccessKeyId?: string;
  /**
  * Amazon account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#eks_account_id ApplicationSettings#eks_account_id}
  */
  readonly eksAccountId?: string;
  /**
  * Enable integration with Amazon EKS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#eks_integration_enabled ApplicationSettings#eks_integration_enabled}
  */
  readonly eksIntegrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * AWS IAM secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#eks_secret_access_key ApplicationSettings#eks_secret_access_key}
  */
  readonly eksSecretAccessKey?: string;
  /**
  * Enable the use of AWS hosted Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_aws ApplicationSettings#elasticsearch_aws}
  */
  readonly elasticsearchAws?: boolean | cdktf.IResolvable;
  /**
  * AWS IAM access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_aws_access_key ApplicationSettings#elasticsearch_aws_access_key}
  */
  readonly elasticsearchAwsAccessKey?: string;
  /**
  * The AWS region the Elasticsearch domain is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_aws_region ApplicationSettings#elasticsearch_aws_region}
  */
  readonly elasticsearchAwsRegion?: string;
  /**
  * AWS IAM secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_aws_secret_access_key ApplicationSettings#elasticsearch_aws_secret_access_key}
  */
  readonly elasticsearchAwsSecretAccessKey?: string;
  /**
  * Maximum size of text fields to index by Elasticsearch. 0 value means no limit. This does not apply to repository and wiki indexing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_indexed_field_length_limit ApplicationSettings#elasticsearch_indexed_field_length_limit}
  */
  readonly elasticsearchIndexedFieldLengthLimit?: number;
  /**
  * Maximum size of repository and wiki files that are indexed by Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_indexed_file_size_limit_kb ApplicationSettings#elasticsearch_indexed_file_size_limit_kb}
  */
  readonly elasticsearchIndexedFileSizeLimitKb?: number;
  /**
  * Enable Elasticsearch indexing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_indexing ApplicationSettings#elasticsearch_indexing}
  */
  readonly elasticsearchIndexing?: boolean | cdktf.IResolvable;
  /**
  * Limit Elasticsearch to index certain namespaces and projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_limit_indexing ApplicationSettings#elasticsearch_limit_indexing}
  */
  readonly elasticsearchLimitIndexing?: boolean | cdktf.IResolvable;
  /**
  * Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_max_bulk_concurrency ApplicationSettings#elasticsearch_max_bulk_concurrency}
  */
  readonly elasticsearchMaxBulkConcurrency?: number;
  /**
  * Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_max_bulk_size_mb ApplicationSettings#elasticsearch_max_bulk_size_mb}
  */
  readonly elasticsearchMaxBulkSizeMb?: number;
  /**
  * Maximum concurrency of Elasticsearch code indexing background jobs. This only applies to repository indexing operations. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_max_code_indexing_concurrency ApplicationSettings#elasticsearch_max_code_indexing_concurrency}
  */
  readonly elasticsearchMaxCodeIndexingConcurrency?: number;
  /**
  * The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_namespace_ids ApplicationSettings#elasticsearch_namespace_ids}
  */
  readonly elasticsearchNamespaceIds?: number[];
  /**
  * The password of your Elasticsearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_password ApplicationSettings#elasticsearch_password}
  */
  readonly elasticsearchPassword?: string;
  /**
  * The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_project_ids ApplicationSettings#elasticsearch_project_ids}
  */
  readonly elasticsearchProjectIds?: number[];
  /**
  * Enable automatic requeuing of indexing workers. This improves non-code indexing throughput by enqueuing Sidekiq jobs until all documents are processed. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_requeue_workers ApplicationSettings#elasticsearch_requeue_workers}
  */
  readonly elasticsearchRequeueWorkers?: boolean | cdktf.IResolvable;
  /**
  * Enable Elasticsearch search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_search ApplicationSettings#elasticsearch_search}
  */
  readonly elasticsearchSearch?: boolean | cdktf.IResolvable;
  /**
  * The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_url ApplicationSettings#elasticsearch_url}
  */
  readonly elasticsearchUrl?: string[];
  /**
  * The username of your Elasticsearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_username ApplicationSettings#elasticsearch_username}
  */
  readonly elasticsearchUsername?: string;
  /**
  * Number of indexing worker shards. This improves non-code indexing throughput by enqueuing more parallel Sidekiq jobs. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#elasticsearch_worker_number_of_shards ApplicationSettings#elasticsearch_worker_number_of_shards}
  */
  readonly elasticsearchWorkerNumberOfShards?: number;
  /**
  * Additional text added to the bottom of every email for legal/auditing/compliance reasons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#email_additional_text ApplicationSettings#email_additional_text}
  */
  readonly emailAdditionalText?: string;
  /**
  * Some email servers do not support overriding the email sender name. Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#email_author_in_body ApplicationSettings#email_author_in_body}
  */
  readonly emailAuthorInBody?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether users must confirm their email before sign in. Possible values are off, soft, and hard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#email_confirmation_setting ApplicationSettings#email_confirmation_setting}
  */
  readonly emailConfirmationSetting?: string;
  /**
  * Show the external redirect page that warns you about user-generated content in GitLab Pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#enable_artifact_external_redirect_warning_page ApplicationSettings#enable_artifact_external_redirect_warning_page}
  */
  readonly enableArtifactExternalRedirectWarningPage?: boolean | cdktf.IResolvable;
  /**
  * Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#enabled_git_access_protocol ApplicationSettings#enabled_git_access_protocol}
  */
  readonly enabledGitAccessProtocol?: string;
  /**
  * Enabling this permits enforcement of namespace storage limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#enforce_namespace_storage_limit ApplicationSettings#enforce_namespace_storage_limit}
  */
  readonly enforceNamespaceStorageLimit?: boolean | cdktf.IResolvable;
  /**
  * (If enabled, requires: terms) Enforce application ToS to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#enforce_terms ApplicationSettings#enforce_terms}
  */
  readonly enforceTerms?: boolean | cdktf.IResolvable;
  /**
  * (If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_auth_client_cert ApplicationSettings#external_auth_client_cert}
  */
  readonly externalAuthClientCert?: string;
  /**
  * Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_auth_client_key ApplicationSettings#external_auth_client_key}
  */
  readonly externalAuthClientKey?: string;
  /**
  * Passphrase to use for the private key when authenticating with the external service this is encrypted when stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_auth_client_key_pass ApplicationSettings#external_auth_client_key_pass}
  */
  readonly externalAuthClientKeyPass?: string;
  /**
  * The default classification label to use when requesting authorization and no classification label has been specified on the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_authorization_service_default_label ApplicationSettings#external_authorization_service_default_label}
  */
  readonly externalAuthorizationServiceDefaultLabel?: string;
  /**
  * (If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_authorization_service_enabled ApplicationSettings#external_authorization_service_enabled}
  */
  readonly externalAuthorizationServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * The timeout after which an authorization request is aborted, in seconds. When a request times out, access is denied to the user. (min: 0.001, max: 10, step: 0.001).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_authorization_service_timeout ApplicationSettings#external_authorization_service_timeout}
  */
  readonly externalAuthorizationServiceTimeout?: number;
  /**
  * URL to which authorization requests are directed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_authorization_service_url ApplicationSettings#external_authorization_service_url}
  */
  readonly externalAuthorizationServiceUrl?: string;
  /**
  * How long to wait for a response from the pipeline validation service. Assumes OK if it times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_pipeline_validation_service_timeout ApplicationSettings#external_pipeline_validation_service_timeout}
  */
  readonly externalPipelineValidationServiceTimeout?: number;
  /**
  * Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_pipeline_validation_service_token ApplicationSettings#external_pipeline_validation_service_token}
  */
  readonly externalPipelineValidationServiceToken?: string;
  /**
  * URL to use for pipeline validation requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#external_pipeline_validation_service_url ApplicationSettings#external_pipeline_validation_service_url}
  */
  readonly externalPipelineValidationServiceUrl?: string;
  /**
  * Time period in minutes after which the user is unlocked when maximum number of failed sign-in attempts reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#failed_login_attempts_unlock_period_in_minutes ApplicationSettings#failed_login_attempts_unlock_period_in_minutes}
  */
  readonly failedLoginAttemptsUnlockPeriodInMinutes?: number;
  /**
  * The ID of a project to load custom file templates from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#file_template_project_id ApplicationSettings#file_template_project_id}
  */
  readonly fileTemplateProjectId?: number;
  /**
  * Start day of the week for calendar views and date pickers. Valid values are 0 for Sunday, 1 for Monday, and 6 for Saturday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#first_day_of_week ApplicationSettings#first_day_of_week}
  */
  readonly firstDayOfWeek?: number;
  /**
  * Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#geo_node_allowed_ips ApplicationSettings#geo_node_allowed_ips}
  */
  readonly geoNodeAllowedIps?: string;
  /**
  * The amount of seconds after which a request to get a secondary node status times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#geo_status_timeout ApplicationSettings#geo_status_timeout}
  */
  readonly geoStatusTimeout?: number;
  /**
  * List of user IDs that are emailed when the Git abuse rate limit is exceeded. Maximum: 100 user IDs. Self-managed, Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#git_rate_limit_users_alertlist ApplicationSettings#git_rate_limit_users_alertlist}
  */
  readonly gitRateLimitUsersAlertlist?: number[];
  /**
  * List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Self-managed, Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#git_rate_limit_users_allowlist ApplicationSettings#git_rate_limit_users_allowlist}
  */
  readonly gitRateLimitUsersAllowlist?: string[];
  /**
  * Maximum duration (in minutes) of a session for Git operations when 2FA is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#git_two_factor_session_expiry ApplicationSettings#git_two_factor_session_expiry}
  */
  readonly gitTwoFactorSessionExpiry?: number;
  /**
  * Default Gitaly timeout, in seconds. This timeout is not enforced for Git fetch/push operations or Sidekiq jobs. Set to 0 to disable timeouts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#gitaly_timeout_default ApplicationSettings#gitaly_timeout_default}
  */
  readonly gitalyTimeoutDefault?: number;
  /**
  * Gitaly fast operation timeout, in seconds. Some Gitaly operations are expected to be fast. If they exceed this threshold, there may be a problem with a storage shard and ‘failing fast’ can help maintain the stability of the GitLab instance. Set to 0 to disable timeouts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#gitaly_timeout_fast ApplicationSettings#gitaly_timeout_fast}
  */
  readonly gitalyTimeoutFast?: number;
  /**
  * Medium Gitaly timeout, in seconds. This should be a value between the Fast and the Default timeout. Set to 0 to disable timeouts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#gitaly_timeout_medium ApplicationSettings#gitaly_timeout_medium}
  */
  readonly gitalyTimeoutMedium?: number;
  /**
  * Maximum number of Git operations per minute a user can perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#gitlab_shell_operation_limit ApplicationSettings#gitlab_shell_operation_limit}
  */
  readonly gitlabShellOperationLimit?: number;
  /**
  * Enable Gitpod integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#gitpod_enabled ApplicationSettings#gitpod_enabled}
  */
  readonly gitpodEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Gitpod instance URL for integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#gitpod_url ApplicationSettings#gitpod_url}
  */
  readonly gitpodUrl?: string;
  /**
  * Comma-separated list of IP addresses and CIDRs always allowed for inbound traffic. For example, 1.1.1.1, 2.2.2.0/24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#globally_allowed_ips ApplicationSettings#globally_allowed_ips}
  */
  readonly globallyAllowedIps?: string;
  /**
  * Enable Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#grafana_enabled ApplicationSettings#grafana_enabled}
  */
  readonly grafanaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Grafana URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#grafana_url ApplicationSettings#grafana_url}
  */
  readonly grafanaUrl?: string;
  /**
  * Enable Gravatar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#gravatar_enabled ApplicationSettings#gravatar_enabled}
  */
  readonly gravatarEnabled?: boolean | cdktf.IResolvable;
  /**
  * Prevent overrides of default branch protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#group_owners_can_manage_default_branch_protection ApplicationSettings#group_owners_can_manage_default_branch_protection}
  */
  readonly groupOwnersCanManageDefaultBranchProtection?: boolean | cdktf.IResolvable;
  /**
  * Hide marketing-related entries from help.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#help_page_hide_commercial_content ApplicationSettings#help_page_hide_commercial_content}
  */
  readonly helpPageHideCommercialContent?: boolean | cdktf.IResolvable;
  /**
  * Alternate support URL for help page and help dropdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#help_page_support_url ApplicationSettings#help_page_support_url}
  */
  readonly helpPageSupportUrl?: string;
  /**
  * Custom text displayed on the help page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#help_page_text ApplicationSettings#help_page_text}
  */
  readonly helpPageText?: string;
  /**
  * GitLab server administrator information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#help_text ApplicationSettings#help_text}
  */
  readonly helpText?: string;
  /**
  * Do not display offers from third parties in GitLab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#hide_third_party_offers ApplicationSettings#hide_third_party_offers}
  */
  readonly hideThirdPartyOffers?: boolean | cdktf.IResolvable;
  /**
  * Redirect to this URL when not logged in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#home_page_url ApplicationSettings#home_page_url}
  */
  readonly homePageUrl?: string;
  /**
  * Enable or disable Git housekeeping. If enabled, requires housekeeping_optimize_repository_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#housekeeping_enabled ApplicationSettings#housekeeping_enabled}
  */
  readonly housekeepingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of Git pushes after which an incremental git-repack is run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#housekeeping_optimize_repository_period ApplicationSettings#housekeeping_optimize_repository_period}
  */
  readonly housekeepingOptimizeRepositoryPeriod?: number;
  /**
  * Enable HTML emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#html_emails_enabled ApplicationSettings#html_emails_enabled}
  */
  readonly htmlEmailsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#id ApplicationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#import_sources ApplicationSettings#import_sources}
  */
  readonly importSources?: string[];
  /**
  * Enable in-product marketing emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#in_product_marketing_emails_enabled ApplicationSettings#in_product_marketing_emails_enabled}
  */
  readonly inProductMarketingEmailsEnabled?: boolean | cdktf.IResolvable;
  /**
  * If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#inactive_projects_delete_after_months ApplicationSettings#inactive_projects_delete_after_months}
  */
  readonly inactiveProjectsDeleteAfterMonths?: number;
  /**
  * If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#inactive_projects_min_size_mb ApplicationSettings#inactive_projects_min_size_mb}
  */
  readonly inactiveProjectsMinSizeMb?: number;
  /**
  * If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#inactive_projects_send_warning_email_after_months ApplicationSettings#inactive_projects_send_warning_email_after_months}
  */
  readonly inactiveProjectsSendWarningEmailAfterMonths?: number;
  /**
  * Whether or not optional metrics are enabled in Service Ping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#include_optional_metrics_in_service_ping ApplicationSettings#include_optional_metrics_in_service_ping}
  */
  readonly includeOptionalMetricsInServicePing?: boolean | cdktf.IResolvable;
  /**
  * Enable Invisible CAPTCHA spam detection during sign-up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#invisible_captcha_enabled ApplicationSettings#invisible_captcha_enabled}
  */
  readonly invisibleCaptchaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Max number of issue creation requests per minute per user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#issues_create_limit ApplicationSettings#issues_create_limit}
  */
  readonly issuesCreateLimit?: number;
  /**
  * ID of the OAuth application used to authenticate with the GitLab for Jira Cloud app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#jira_connect_application_key ApplicationSettings#jira_connect_application_key}
  */
  readonly jiraConnectApplicationKey?: string;
  /**
  * URL of the GitLab instance used as a proxy for the GitLab for Jira Cloud app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#jira_connect_proxy_url ApplicationSettings#jira_connect_proxy_url}
  */
  readonly jiraConnectProxyUrl?: string;
  /**
  * Enable public key storage for the GitLab for Jira Cloud app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#jira_connect_public_key_storage_enabled ApplicationSettings#jira_connect_public_key_storage_enabled}
  */
  readonly jiraConnectPublicKeyStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#keep_latest_artifact ApplicationSettings#keep_latest_artifact}
  */
  readonly keepLatestArtifact?: boolean | cdktf.IResolvable;
  /**
  * Increase this value when any cached Markdown should be invalidated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#local_markdown_version ApplicationSettings#local_markdown_version}
  */
  readonly localMarkdownVersion?: number;
  /**
  * Indicates whether the GitLab Duo features enabled setting is enforced for all subgroups. Self-managed, Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#lock_duo_features_enabled ApplicationSettings#lock_duo_features_enabled}
  */
  readonly lockDuoFeaturesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set to true to lock all memberships to LDAP. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#lock_memberships_to_ldap ApplicationSettings#lock_memberships_to_ldap}
  */
  readonly lockMembershipsToLdap?: boolean | cdktf.IResolvable;
  /**
  * Enable Mailgun event receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#mailgun_events_enabled ApplicationSettings#mailgun_events_enabled}
  */
  readonly mailgunEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Mailgun HTTP webhook signing key for receiving events from webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#mailgun_signing_key ApplicationSettings#mailgun_signing_key}
  */
  readonly mailgunSigningKey?: string;
  /**
  * When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#maintenance_mode ApplicationSettings#maintenance_mode}
  */
  readonly maintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * Message displayed when instance is in maintenance mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#maintenance_mode_message ApplicationSettings#maintenance_mode_message}
  */
  readonly maintenanceModeMessage?: string;
  /**
  * Use repo.maven.apache.org as a default remote repository when the package is not found in the GitLab Package Registry for Maven. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#maven_package_requests_forwarding ApplicationSettings#maven_package_requests_forwarding}
  */
  readonly mavenPackageRequestsForwarding?: boolean | cdktf.IResolvable;
  /**
  * Maximum artifacts size in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_artifacts_size ApplicationSettings#max_artifacts_size}
  */
  readonly maxArtifactsSize?: number;
  /**
  * Limit attachment size in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_attachment_size ApplicationSettings#max_attachment_size}
  */
  readonly maxAttachmentSize?: number;
  /**
  * Maximum decompressed archive size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_decompressed_archive_size ApplicationSettings#max_decompressed_archive_size}
  */
  readonly maxDecompressedArchiveSize?: number;
  /**
  * Maximum export size in MB. 0 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_export_size ApplicationSettings#max_export_size}
  */
  readonly maxExportSize?: number;
  /**
  * Maximum remote file size for imports from external object storages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_import_remote_file_size ApplicationSettings#max_import_remote_file_size}
  */
  readonly maxImportRemoteFileSize?: number;
  /**
  * Maximum import size in MB. 0 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_import_size ApplicationSettings#max_import_size}
  */
  readonly maxImportSize?: number;
  /**
  * Maximum number of sign-in attempts before locking out the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_login_attempts ApplicationSettings#max_login_attempts}
  */
  readonly maxLoginAttempts?: number;
  /**
  * Maximum number of unique repositories a user can download in the specified time period before they are banned. Maximum: 10,000 repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_number_of_repository_downloads ApplicationSettings#max_number_of_repository_downloads}
  */
  readonly maxNumberOfRepositoryDownloads?: number;
  /**
  * Reporting time period (in seconds). Maximum: 864000 seconds (10 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_number_of_repository_downloads_within_time_period ApplicationSettings#max_number_of_repository_downloads_within_time_period}
  */
  readonly maxNumberOfRepositoryDownloadsWithinTimePeriod?: number;
  /**
  * Maximum size of pages repositories in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_pages_size ApplicationSettings#max_pages_size}
  */
  readonly maxPagesSize?: number;
  /**
  * Maximum allowable lifetime for access tokens in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_personal_access_token_lifetime ApplicationSettings#max_personal_access_token_lifetime}
  */
  readonly maxPersonalAccessTokenLifetime?: number;
  /**
  * Maximum allowable lifetime for SSH keys in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_ssh_key_lifetime ApplicationSettings#max_ssh_key_lifetime}
  */
  readonly maxSshKeyLifetime?: number;
  /**
  * Maximum size in bytes of the Terraform state files. Set this to 0 for unlimited file size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#max_terraform_state_size_bytes ApplicationSettings#max_terraform_state_size_bytes}
  */
  readonly maxTerraformStateSizeBytes?: number;
  /**
  * A method call is only tracked when it takes longer than the given amount of milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#metrics_method_call_threshold ApplicationSettings#metrics_method_call_threshold}
  */
  readonly metricsMethodCallThreshold?: number;
  /**
  * Indicates whether passwords require a minimum length. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#minimum_password_length ApplicationSettings#minimum_password_length}
  */
  readonly minimumPasswordLength?: number;
  /**
  * Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#mirror_available ApplicationSettings#mirror_available}
  */
  readonly mirrorAvailable?: boolean | cdktf.IResolvable;
  /**
  * Minimum capacity to be available before scheduling more mirrors preemptively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#mirror_capacity_threshold ApplicationSettings#mirror_capacity_threshold}
  */
  readonly mirrorCapacityThreshold?: number;
  /**
  * Maximum number of mirrors that can be synchronizing at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#mirror_max_capacity ApplicationSettings#mirror_max_capacity}
  */
  readonly mirrorMaxCapacity?: number;
  /**
  * Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#mirror_max_delay ApplicationSettings#mirror_max_delay}
  */
  readonly mirrorMaxDelay?: number;
  /**
  * Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#npm_package_requests_forwarding ApplicationSettings#npm_package_requests_forwarding}
  */
  readonly npmPackageRequestsForwarding?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to skip metadata URL validation for the NuGet package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#nuget_skip_metadata_url_validation ApplicationSettings#nuget_skip_metadata_url_validation}
  */
  readonly nugetSkipMetadataUrlValidation?: boolean | cdktf.IResolvable;
  /**
  * Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#outbound_local_requests_whitelist ApplicationSettings#outbound_local_requests_whitelist}
  */
  readonly outboundLocalRequestsWhitelist?: string[];
  /**
  * List of package registry metadata to sync. See the list of the available values (https://gitlab.com/gitlab-org/gitlab/-/blob/ace16c20d5da7c4928dd03fb139692638b557fe3/app/models/concerns/enums/package_metadata.rb#L5). Self-managed, Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#package_metadata_purl_types ApplicationSettings#package_metadata_purl_types}
  */
  readonly packageMetadataPurlTypes?: number[];
  /**
  * Enable to allow anyone to pull from Package Registry visible and changeable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#package_registry_allow_anyone_to_pull_option ApplicationSettings#package_registry_allow_anyone_to_pull_option}
  */
  readonly packageRegistryAllowAnyoneToPullOption?: boolean | cdktf.IResolvable;
  /**
  * Number of workers assigned to the packages cleanup policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#package_registry_cleanup_policies_worker_capacity ApplicationSettings#package_registry_cleanup_policies_worker_capacity}
  */
  readonly packageRegistryCleanupPoliciesWorkerCapacity?: number;
  /**
  * Require users to prove ownership of custom domains. Domain verification is an essential security measure for public GitLab sites. Users are required to demonstrate they control a domain before it is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#pages_domain_verification_enabled ApplicationSettings#pages_domain_verification_enabled}
  */
  readonly pagesDomainVerificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable authentication for Git over HTTP(S) via a GitLab account password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#password_authentication_enabled_for_git ApplicationSettings#password_authentication_enabled_for_git}
  */
  readonly passwordAuthenticationEnabledForGit?: boolean | cdktf.IResolvable;
  /**
  * Enable authentication for the web interface via a GitLab account password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#password_authentication_enabled_for_web ApplicationSettings#password_authentication_enabled_for_web}
  */
  readonly passwordAuthenticationEnabledForWeb?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether passwords require at least one lowercase letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#password_lowercase_required ApplicationSettings#password_lowercase_required}
  */
  readonly passwordLowercaseRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether passwords require at least one number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#password_number_required ApplicationSettings#password_number_required}
  */
  readonly passwordNumberRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether passwords require at least one symbol character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#password_symbol_required ApplicationSettings#password_symbol_required}
  */
  readonly passwordSymbolRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether passwords require at least one uppercase letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#password_uppercase_required ApplicationSettings#password_uppercase_required}
  */
  readonly passwordUppercaseRequired?: boolean | cdktf.IResolvable;
  /**
  * Path of the group that is allowed to toggle the performance bar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#performance_bar_allowed_group_path ApplicationSettings#performance_bar_allowed_group_path}
  */
  readonly performanceBarAllowedGroupPath?: string;
  /**
  * Prefix for all generated personal access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#personal_access_token_prefix ApplicationSettings#personal_access_token_prefix}
  */
  readonly personalAccessTokenPrefix?: string;
  /**
  * Maximum number of pipeline creation requests per minute per user and commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#pipeline_limit_per_project_user_sha ApplicationSettings#pipeline_limit_per_project_user_sha}
  */
  readonly pipelineLimitPerProjectUserSha?: number;
  /**
  * (If enabled, requires: plantuml_url) Enable PlantUML integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#plantuml_enabled ApplicationSettings#plantuml_enabled}
  */
  readonly plantumlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The PlantUML instance URL for integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#plantuml_url ApplicationSettings#plantuml_url}
  */
  readonly plantumlUrl?: string;
  /**
  * Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#polling_interval_multiplier ApplicationSettings#polling_interval_multiplier}
  */
  readonly pollingIntervalMultiplier?: number;
  /**
  * Enable project export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#project_export_enabled ApplicationSettings#project_export_enabled}
  */
  readonly projectExportEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum authenticated requests to /project/:id/jobs per minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#project_jobs_api_rate_limit ApplicationSettings#project_jobs_api_rate_limit}
  */
  readonly projectJobsApiRateLimit?: number;
  /**
  * Max number of requests per 10 minutes per IP address for unauthenticated requests to the list all projects API. To disable throttling set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#projects_api_rate_limit_unauthenticated ApplicationSettings#projects_api_rate_limit_unauthenticated}
  */
  readonly projectsApiRateLimitUnauthenticated?: number;
  /**
  * Enable Prometheus metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#prometheus_metrics_enabled ApplicationSettings#prometheus_metrics_enabled}
  */
  readonly prometheusMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * CI/CD variables are protected by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#protected_ci_variables ApplicationSettings#protected_ci_variables}
  */
  readonly protectedCiVariables?: boolean | cdktf.IResolvable;
  /**
  * Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created. Bulk push events are created if it surpasses that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#push_event_activities_limit ApplicationSettings#push_event_activities_limit}
  */
  readonly pushEventActivitiesLimit?: number;
  /**
  * Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not. Webhooks and services aren’t submitted if it surpasses that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#push_event_hooks_limit ApplicationSettings#push_event_hooks_limit}
  */
  readonly pushEventHooksLimit?: number;
  /**
  * Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#pypi_package_requests_forwarding ApplicationSettings#pypi_package_requests_forwarding}
  */
  readonly pypiPackageRequestsForwarding?: boolean | cdktf.IResolvable;
  /**
  * When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded. ‘Retry later’ is sent if this is blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#rate_limiting_response_text ApplicationSettings#rate_limiting_response_text}
  */
  readonly rateLimitingResponseText?: string;
  /**
  * Max number of requests per minute for each raw path. To disable throttling set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#raw_blob_request_limit ApplicationSettings#raw_blob_request_limit}
  */
  readonly rawBlobRequestLimit?: number;
  /**
  * (If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#recaptcha_enabled ApplicationSettings#recaptcha_enabled}
  */
  readonly recaptchaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Private key for reCAPTCHA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#recaptcha_private_key ApplicationSettings#recaptcha_private_key}
  */
  readonly recaptchaPrivateKey?: string;
  /**
  * Site key for reCAPTCHA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#recaptcha_site_key ApplicationSettings#recaptcha_site_key}
  */
  readonly recaptchaSiteKey?: string;
  /**
  * Maximum push size (MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#receive_max_input_size ApplicationSettings#receive_max_input_size}
  */
  readonly receiveMaxInputSize?: number;
  /**
  * Enable receptive mode for GitLab Agents for Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#receptive_cluster_agents_enabled ApplicationSettings#receptive_cluster_agents_enabled}
  */
  readonly receptiveClusterAgentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Remember me setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#remember_me_enabled ApplicationSettings#remember_me_enabled}
  */
  readonly rememberMeEnabled?: boolean | cdktf.IResolvable;
  /**
  * GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#repository_checks_enabled ApplicationSettings#repository_checks_enabled}
  */
  readonly repositoryChecksEnabled?: boolean | cdktf.IResolvable;
  /**
  * Size limit per repository (MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#repository_size_limit ApplicationSettings#repository_size_limit}
  */
  readonly repositorySizeLimit?: number;
  /**
  * Hash of names taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#repository_storages_weighted ApplicationSettings#repository_storages_weighted}
  */
  readonly repositoryStoragesWeighted?: { [key: string]: number };
  /**
  * When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#require_admin_approval_after_user_signup ApplicationSettings#require_admin_approval_after_user_signup}
  */
  readonly requireAdminApprovalAfterUserSignup?: boolean | cdktf.IResolvable;
  /**
  * Allow administrators to require 2FA for all administrators on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#require_admin_two_factor_authentication ApplicationSettings#require_admin_two_factor_authentication}
  */
  readonly requireAdminTwoFactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * When enabled, users must set an expiration date when creating a group or project access token, or a personal access token owned by a non-service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#require_personal_access_token_expiry ApplicationSettings#require_personal_access_token_expiry}
  */
  readonly requirePersonalAccessTokenExpiry?: boolean | cdktf.IResolvable;
  /**
  * (If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#require_two_factor_authentication ApplicationSettings#require_two_factor_authentication}
  */
  readonly requireTwoFactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Selected levels cannot be used by non-Administrator users for groups, projects or snippets. Can take private, internal and public as a parameter. Null means there is no restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#restricted_visibility_levels ApplicationSettings#restricted_visibility_levels}
  */
  readonly restrictedVisibilityLevels?: string[];
  /**
  * The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#rsa_key_restriction ApplicationSettings#rsa_key_restriction}
  */
  readonly rsaKeyRestriction?: number;
  /**
  * Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#search_rate_limit ApplicationSettings#search_rate_limit}
  */
  readonly searchRateLimit?: number;
  /**
  * Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#search_rate_limit_unauthenticated ApplicationSettings#search_rate_limit_unauthenticated}
  */
  readonly searchRateLimitUnauthenticated?: number;
  /**
  * Maximum number of active merge request approval policies per security policy project. Maximum: 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#security_approval_policies_limit ApplicationSettings#security_approval_policies_limit}
  */
  readonly securityApprovalPoliciesLimit?: number;
  /**
  * Whether to look up merge request approval policy approval groups globally or within project hierarchies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#security_policy_global_group_approvers_enabled ApplicationSettings#security_policy_global_group_approvers_enabled}
  */
  readonly securityPolicyGlobalGroupApproversEnabled?: boolean | cdktf.IResolvable;
  /**
  * Public security contact information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#security_txt_content ApplicationSettings#security_txt_content}
  */
  readonly securityTxtContent?: string;
  /**
  * Send confirmation email on sign-up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#send_user_confirmation_email ApplicationSettings#send_user_confirmation_email}
  */
  readonly sendUserConfirmationEmail?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate if token expiry date can be optional for service account users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#service_access_tokens_expiration_enforced ApplicationSettings#service_access_tokens_expiration_enforced}
  */
  readonly serviceAccessTokensExpirationEnforced?: boolean | cdktf.IResolvable;
  /**
  * Session duration in minutes. GitLab restart is required to apply changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#session_expire_delay ApplicationSettings#session_expire_delay}
  */
  readonly sessionExpireDelay?: number;
  /**
  * (If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#shared_runners_enabled ApplicationSettings#shared_runners_enabled}
  */
  readonly sharedRunnersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set the maximum number of CI/CD minutes that a group can use on shared runners per month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#shared_runners_minutes ApplicationSettings#shared_runners_minutes}
  */
  readonly sharedRunnersMinutes?: number;
  /**
  * Shared runners text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#shared_runners_text ApplicationSettings#shared_runners_text}
  */
  readonly sharedRunnersText?: string;
  /**
  * The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#sidekiq_job_limiter_compression_threshold_bytes ApplicationSettings#sidekiq_job_limiter_compression_threshold_bytes}
  */
  readonly sidekiqJobLimiterCompressionThresholdBytes?: number;
  /**
  * The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#sidekiq_job_limiter_limit_bytes ApplicationSettings#sidekiq_job_limiter_limit_bytes}
  */
  readonly sidekiqJobLimiterLimitBytes?: number;
  /**
  * track or compress. Sets the behavior for Sidekiq job size limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#sidekiq_job_limiter_mode ApplicationSettings#sidekiq_job_limiter_mode}
  */
  readonly sidekiqJobLimiterMode?: string;
  /**
  * Text on the login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#sign_in_text ApplicationSettings#sign_in_text}
  */
  readonly signInText?: string;
  /**
  * Enable registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#signup_enabled ApplicationSettings#signup_enabled}
  */
  readonly signupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Silent admin exports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#silent_admin_exports_enabled ApplicationSettings#silent_admin_exports_enabled}
  */
  readonly silentAdminExportsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Silent mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#silent_mode_enabled ApplicationSettings#silent_mode_enabled}
  */
  readonly silentModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * (If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#slack_app_enabled ApplicationSettings#slack_app_enabled}
  */
  readonly slackAppEnabled?: boolean | cdktf.IResolvable;
  /**
  * The app ID of the Slack-app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#slack_app_id ApplicationSettings#slack_app_id}
  */
  readonly slackAppId?: string;
  /**
  * The app secret of the Slack-app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#slack_app_secret ApplicationSettings#slack_app_secret}
  */
  readonly slackAppSecret?: string;
  /**
  * The signing secret of the Slack-app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#slack_app_signing_secret ApplicationSettings#slack_app_signing_secret}
  */
  readonly slackAppSigningSecret?: string;
  /**
  * The verification token of the Slack-app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#slack_app_verification_token ApplicationSettings#slack_app_verification_token}
  */
  readonly slackAppVerificationToken?: string;
  /**
  * Max snippet content size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#snippet_size_limit ApplicationSettings#snippet_size_limit}
  */
  readonly snippetSizeLimit?: number;
  /**
  * The Snowplow site name / application ID. (for example, gitlab)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#snowplow_app_id ApplicationSettings#snowplow_app_id}
  */
  readonly snowplowAppId?: string;
  /**
  * The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#snowplow_collector_hostname ApplicationSettings#snowplow_collector_hostname}
  */
  readonly snowplowCollectorHostname?: string;
  /**
  * The Snowplow cookie domain. (for example, .gitlab.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#snowplow_cookie_domain ApplicationSettings#snowplow_cookie_domain}
  */
  readonly snowplowCookieDomain?: string;
  /**
  * The Snowplow collector for database events hostname. (for example, db-snowplow.trx.gitlab.net)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#snowplow_database_collector_hostname ApplicationSettings#snowplow_database_collector_hostname}
  */
  readonly snowplowDatabaseCollectorHostname?: string;
  /**
  * Enable snowplow tracking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#snowplow_enabled ApplicationSettings#snowplow_enabled}
  */
  readonly snowplowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables Sourcegraph integration. If enabled, requires sourcegraph_url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#sourcegraph_enabled ApplicationSettings#sourcegraph_enabled}
  */
  readonly sourcegraphEnabled?: boolean | cdktf.IResolvable;
  /**
  * Blocks Sourcegraph from being loaded on private and internal projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#sourcegraph_public_only ApplicationSettings#sourcegraph_public_only}
  */
  readonly sourcegraphPublicOnly?: boolean | cdktf.IResolvable;
  /**
  * The Sourcegraph instance URL for integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#sourcegraph_url ApplicationSettings#sourcegraph_url}
  */
  readonly sourcegraphUrl?: string;
  /**
  * API key used by GitLab for accessing the Spam Check service endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#spam_check_api_key ApplicationSettings#spam_check_api_key}
  */
  readonly spamCheckApiKey?: string;
  /**
  * Enables spam checking using external Spam Check API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#spam_check_endpoint_enabled ApplicationSettings#spam_check_endpoint_enabled}
  */
  readonly spamCheckEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * URL of the external Spamcheck service endpoint. Valid URI schemes are grpc or tls. Specifying tls forces communication to be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#spam_check_endpoint_url ApplicationSettings#spam_check_endpoint_url}
  */
  readonly spamCheckEndpointUrl?: string;
  /**
  * Authentication token for the external storage linked in static_objects_external_storage_url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#static_objects_external_storage_auth_token ApplicationSettings#static_objects_external_storage_auth_token}
  */
  readonly staticObjectsExternalStorageAuthToken?: string;
  /**
  * URL to an external storage for repository static objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#static_objects_external_storage_url ApplicationSettings#static_objects_external_storage_url}
  */
  readonly staticObjectsExternalStorageUrl?: string;
  /**
  * Enable pipeline suggestion banner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#suggest_pipeline_enabled ApplicationSettings#suggest_pipeline_enabled}
  */
  readonly suggestPipelineEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#terminal_max_session_time ApplicationSettings#terminal_max_session_time}
  */
  readonly terminalMaxSessionTime?: number;
  /**
  * (Required by: enforce_terms) Markdown content for the ToS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#terms ApplicationSettings#terms}
  */
  readonly terms?: string;
  /**
  * (If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit. Helps reduce request volume (for example, from crawlers or abusive bots).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_api_enabled ApplicationSettings#throttle_authenticated_api_enabled}
  */
  readonly throttleAuthenticatedApiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rate limit period (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_api_period_in_seconds ApplicationSettings#throttle_authenticated_api_period_in_seconds}
  */
  readonly throttleAuthenticatedApiPeriodInSeconds?: number;
  /**
  * Maximum requests per period per user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_api_requests_per_period ApplicationSettings#throttle_authenticated_api_requests_per_period}
  */
  readonly throttleAuthenticatedApiRequestsPerPeriod?: number;
  /**
  * (If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_packages_api_enabled ApplicationSettings#throttle_authenticated_packages_api_enabled}
  */
  readonly throttleAuthenticatedPackagesApiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rate limit period (in seconds). View Package Registry rate limits for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_packages_api_period_in_seconds ApplicationSettings#throttle_authenticated_packages_api_period_in_seconds}
  */
  readonly throttleAuthenticatedPackagesApiPeriodInSeconds?: number;
  /**
  * Maximum requests per period per user. View Package Registry rate limits for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_packages_api_requests_per_period ApplicationSettings#throttle_authenticated_packages_api_requests_per_period}
  */
  readonly throttleAuthenticatedPackagesApiRequestsPerPeriod?: number;
  /**
  * (If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit. Helps reduce request volume (for example, from crawlers or abusive bots).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_web_enabled ApplicationSettings#throttle_authenticated_web_enabled}
  */
  readonly throttleAuthenticatedWebEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rate limit period (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_web_period_in_seconds ApplicationSettings#throttle_authenticated_web_period_in_seconds}
  */
  readonly throttleAuthenticatedWebPeriodInSeconds?: number;
  /**
  * Maximum requests per period per user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_authenticated_web_requests_per_period ApplicationSettings#throttle_authenticated_web_requests_per_period}
  */
  readonly throttleAuthenticatedWebRequestsPerPeriod?: number;
  /**
  * (If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit. Helps reduce request volume (for example, from crawlers or abusive bots).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_api_enabled ApplicationSettings#throttle_unauthenticated_api_enabled}
  */
  readonly throttleUnauthenticatedApiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rate limit period in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_api_period_in_seconds}
  */
  readonly throttleUnauthenticatedApiPeriodInSeconds?: number;
  /**
  * Max requests per period per IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_api_requests_per_period ApplicationSettings#throttle_unauthenticated_api_requests_per_period}
  */
  readonly throttleUnauthenticatedApiRequestsPerPeriod?: number;
  /**
  * (If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_enabled ApplicationSettings#throttle_unauthenticated_packages_api_enabled}
  */
  readonly throttleUnauthenticatedPackagesApiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rate limit period (in seconds). View Package Registry rate limits for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_packages_api_period_in_seconds}
  */
  readonly throttleUnauthenticatedPackagesApiPeriodInSeconds?: number;
  /**
  * Maximum requests per period per user. View Package Registry rate limits for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_requests_per_period ApplicationSettings#throttle_unauthenticated_packages_api_requests_per_period}
  */
  readonly throttleUnauthenticatedPackagesApiRequestsPerPeriod?: number;
  /**
  * (If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit. Helps reduce request volume (for example, from crawlers or abusive bots).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_web_enabled ApplicationSettings#throttle_unauthenticated_web_enabled}
  */
  readonly throttleUnauthenticatedWebEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rate limit period in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_web_period_in_seconds ApplicationSettings#throttle_unauthenticated_web_period_in_seconds}
  */
  readonly throttleUnauthenticatedWebPeriodInSeconds?: number;
  /**
  * Max requests per period per IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#throttle_unauthenticated_web_requests_per_period ApplicationSettings#throttle_unauthenticated_web_requests_per_period}
  */
  readonly throttleUnauthenticatedWebRequestsPerPeriod?: number;
  /**
  * Limit display of time tracking units to hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#time_tracking_limit_to_hours ApplicationSettings#time_tracking_limit_to_hours}
  */
  readonly timeTrackingLimitToHours?: boolean | cdktf.IResolvable;
  /**
  * Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#two_factor_grace_period ApplicationSettings#two_factor_grace_period}
  */
  readonly twoFactorGracePeriod?: number;
  /**
  * Specifies how many days after sign-up to delete users who have not confirmed their email. Only applicable if delete_unconfirmed_users is set to true. Must be 1 or greater. Self-managed, Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#unconfirmed_users_delete_after_days ApplicationSettings#unconfirmed_users_delete_after_days}
  */
  readonly unconfirmedUsersDeleteAfterDays?: number;
  /**
  * (If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#unique_ips_limit_enabled ApplicationSettings#unique_ips_limit_enabled}
  */
  readonly uniqueIpsLimitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of IPs per user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#unique_ips_limit_per_user ApplicationSettings#unique_ips_limit_per_user}
  */
  readonly uniqueIpsLimitPerUser?: number;
  /**
  * How many seconds an IP is counted towards the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#unique_ips_limit_time_window ApplicationSettings#unique_ips_limit_time_window}
  */
  readonly uniqueIpsLimitTimeWindow?: number;
  /**
  * Fetch GitLab Runner release version data from GitLab.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#update_runner_versions_enabled ApplicationSettings#update_runner_versions_enabled}
  */
  readonly updateRunnerVersionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Every week GitLab reports license usage back to GitLab, Inc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#usage_ping_enabled ApplicationSettings#usage_ping_enabled}
  */
  readonly usagePingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables ClickHouse as a data source for analytics reports. ClickHouse must be configured for this setting to take effect. Available on Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#use_clickhouse_for_analytics ApplicationSettings#use_clickhouse_for_analytics}
  */
  readonly useClickhouseForAnalytics?: boolean | cdktf.IResolvable;
  /**
  * Send an email to users upon account deactivation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#user_deactivation_emails_enabled ApplicationSettings#user_deactivation_emails_enabled}
  */
  readonly userDeactivationEmailsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Newly registered users are external by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#user_default_external ApplicationSettings#user_default_external}
  */
  readonly userDefaultExternal?: boolean | cdktf.IResolvable;
  /**
  * Specify an email address regex pattern to identify default internal users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#user_default_internal_regex ApplicationSettings#user_default_internal_regex}
  */
  readonly userDefaultInternalRegex?: string;
  /**
  * Newly created users have private profile by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#user_defaults_to_private_profile ApplicationSettings#user_defaults_to_private_profile}
  */
  readonly userDefaultsToPrivateProfile?: boolean | cdktf.IResolvable;
  /**
  * Allow users to register any application to use GitLab as an OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#user_oauth_applications ApplicationSettings#user_oauth_applications}
  */
  readonly userOauthApplications?: boolean | cdktf.IResolvable;
  /**
  * When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#user_show_add_ssh_key_message ApplicationSettings#user_show_add_ssh_key_message}
  */
  readonly userShowAddSshKeyMessage?: boolean | cdktf.IResolvable;
  /**
  * List of types which are allowed to register a GitLab Runner. Can be [], ['group'], ['project'] or ['group', 'project'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#valid_runner_registrars ApplicationSettings#valid_runner_registrars}
  */
  readonly validRunnerRegistrars?: string[];
  /**
  * Let GitLab inform you when an update is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#version_check_enabled ApplicationSettings#version_check_enabled}
  */
  readonly versionCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#web_ide_clientside_preview_enabled ApplicationSettings#web_ide_clientside_preview_enabled}
  */
  readonly webIdeClientsidePreviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * What's new variant, possible values: all_tiers, current_tier, and disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#whats_new_variant ApplicationSettings#whats_new_variant}
  */
  readonly whatsNewVariant?: string;
  /**
  * Maximum wiki page content size in bytes. The minimum value is 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#wiki_page_max_content_bytes ApplicationSettings#wiki_page_max_content_bytes}
  */
  readonly wikiPageMaxContentBytes?: number;
  /**
  * default_branch_protection_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#default_branch_protection_defaults ApplicationSettings#default_branch_protection_defaults}
  */
  readonly defaultBranchProtectionDefaults?: ApplicationSettingsDefaultBranchProtectionDefaults;
}
export interface ApplicationSettingsDefaultBranchProtectionDefaults {
  /**
  * Allow force push for all users with push access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allow_force_push ApplicationSettings#allow_force_push}
  */
  readonly allowForcePush?: boolean | cdktf.IResolvable;
  /**
  * An array of access levels allowed to merge. Supports Developer (30) or Maintainer (40).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allowed_to_merge ApplicationSettings#allowed_to_merge}
  */
  readonly allowedToMerge?: number[];
  /**
  * An array of access levels allowed to push. Supports Developer (30) or Maintainer (40).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#allowed_to_push ApplicationSettings#allowed_to_push}
  */
  readonly allowedToPush?: number[];
  /**
  * Allow developers to initial push.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#developer_can_initial_push ApplicationSettings#developer_can_initial_push}
  */
  readonly developerCanInitialPush?: boolean | cdktf.IResolvable;
}

export function applicationSettingsDefaultBranchProtectionDefaultsToTerraform(struct?: ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference | ApplicationSettingsDefaultBranchProtectionDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_force_push: cdktf.booleanToTerraform(struct!.allowForcePush),
    allowed_to_merge: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedToMerge),
    allowed_to_push: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedToPush),
    developer_can_initial_push: cdktf.booleanToTerraform(struct!.developerCanInitialPush),
  }
}


export function applicationSettingsDefaultBranchProtectionDefaultsToHclTerraform(struct?: ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference | ApplicationSettingsDefaultBranchProtectionDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_force_push: {
      value: cdktf.booleanToHclTerraform(struct!.allowForcePush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_to_merge: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedToMerge),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    allowed_to_push: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowedToPush),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    developer_can_initial_push: {
      value: cdktf.booleanToHclTerraform(struct!.developerCanInitialPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSettingsDefaultBranchProtectionDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowForcePush !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowForcePush = this._allowForcePush;
    }
    if (this._allowedToMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToMerge = this._allowedToMerge;
    }
    if (this._allowedToPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToPush = this._allowedToPush;
    }
    if (this._developerCanInitialPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerCanInitialPush = this._developerCanInitialPush;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSettingsDefaultBranchProtectionDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowForcePush = undefined;
      this._allowedToMerge = undefined;
      this._allowedToPush = undefined;
      this._developerCanInitialPush = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowForcePush = value.allowForcePush;
      this._allowedToMerge = value.allowedToMerge;
      this._allowedToPush = value.allowedToPush;
      this._developerCanInitialPush = value.developerCanInitialPush;
    }
  }

  // allow_force_push - computed: true, optional: true, required: false
  private _allowForcePush?: boolean | cdktf.IResolvable; 
  public get allowForcePush() {
    return this.getBooleanAttribute('allow_force_push');
  }
  public set allowForcePush(value: boolean | cdktf.IResolvable) {
    this._allowForcePush = value;
  }
  public resetAllowForcePush() {
    this._allowForcePush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForcePushInput() {
    return this._allowForcePush;
  }

  // allowed_to_merge - computed: true, optional: true, required: false
  private _allowedToMerge?: number[]; 
  public get allowedToMerge() {
    return this.getNumberListAttribute('allowed_to_merge');
  }
  public set allowedToMerge(value: number[]) {
    this._allowedToMerge = value;
  }
  public resetAllowedToMerge() {
    this._allowedToMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToMergeInput() {
    return this._allowedToMerge;
  }

  // allowed_to_push - computed: true, optional: true, required: false
  private _allowedToPush?: number[]; 
  public get allowedToPush() {
    return this.getNumberListAttribute('allowed_to_push');
  }
  public set allowedToPush(value: number[]) {
    this._allowedToPush = value;
  }
  public resetAllowedToPush() {
    this._allowedToPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToPushInput() {
    return this._allowedToPush;
  }

  // developer_can_initial_push - computed: true, optional: true, required: false
  private _developerCanInitialPush?: boolean | cdktf.IResolvable; 
  public get developerCanInitialPush() {
    return this.getBooleanAttribute('developer_can_initial_push');
  }
  public set developerCanInitialPush(value: boolean | cdktf.IResolvable) {
    this._developerCanInitialPush = value;
  }
  public resetDeveloperCanInitialPush() {
    this._developerCanInitialPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerCanInitialPushInput() {
    return this._developerCanInitialPush;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings gitlab_application_settings}
*/
export class ApplicationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_application_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSettings to import
  * @param importFromId The id of the existing ApplicationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_application_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/application_settings gitlab_application_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_application_settings',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.3.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abuseNotificationEmail = config.abuseNotificationEmail;
    this._adminMode = config.adminMode;
    this._afterSignOutPath = config.afterSignOutPath;
    this._afterSignUpText = config.afterSignUpText;
    this._akismetApiKey = config.akismetApiKey;
    this._akismetEnabled = config.akismetEnabled;
    this._allowAccountDeletion = config.allowAccountDeletion;
    this._allowGroupOwnersToManageLdap = config.allowGroupOwnersToManageLdap;
    this._allowLocalRequestsFromSystemHooks = config.allowLocalRequestsFromSystemHooks;
    this._allowLocalRequestsFromWebHooksAndServices = config.allowLocalRequestsFromWebHooksAndServices;
    this._allowProjectCreationForGuestAndBelow = config.allowProjectCreationForGuestAndBelow;
    this._allowRunnerRegistrationToken = config.allowRunnerRegistrationToken;
    this._archiveBuildsInHumanReadable = config.archiveBuildsInHumanReadable;
    this._asciidocMaxIncludes = config.asciidocMaxIncludes;
    this._assetProxyAllowlist = config.assetProxyAllowlist;
    this._assetProxyEnabled = config.assetProxyEnabled;
    this._assetProxySecretKey = config.assetProxySecretKey;
    this._assetProxyUrl = config.assetProxyUrl;
    this._authorizedKeysEnabled = config.authorizedKeysEnabled;
    this._autoBanUserOnExcessiveProjectsDownload = config.autoBanUserOnExcessiveProjectsDownload;
    this._autoDevopsDomain = config.autoDevopsDomain;
    this._autoDevopsEnabled = config.autoDevopsEnabled;
    this._automaticPurchasedStorageAllocation = config.automaticPurchasedStorageAllocation;
    this._bulkImportConcurrentPipelineBatchLimit = config.bulkImportConcurrentPipelineBatchLimit;
    this._bulkImportEnabled = config.bulkImportEnabled;
    this._bulkImportMaxDownloadFileSize = config.bulkImportMaxDownloadFileSize;
    this._canCreateGroup = config.canCreateGroup;
    this._checkNamespacePlan = config.checkNamespacePlan;
    this._ciMaxIncludes = config.ciMaxIncludes;
    this._ciMaxTotalYamlSizeBytes = config.ciMaxTotalYamlSizeBytes;
    this._commitEmailHostname = config.commitEmailHostname;
    this._concurrentBitbucketImportJobsLimit = config.concurrentBitbucketImportJobsLimit;
    this._concurrentBitbucketServerImportJobsLimit = config.concurrentBitbucketServerImportJobsLimit;
    this._concurrentGithubImportJobsLimit = config.concurrentGithubImportJobsLimit;
    this._containerExpirationPoliciesEnableHistoricEntries = config.containerExpirationPoliciesEnableHistoricEntries;
    this._containerRegistryCleanupTagsServiceMaxListSize = config.containerRegistryCleanupTagsServiceMaxListSize;
    this._containerRegistryDeleteTagsServiceTimeout = config.containerRegistryDeleteTagsServiceTimeout;
    this._containerRegistryExpirationPoliciesCaching = config.containerRegistryExpirationPoliciesCaching;
    this._containerRegistryExpirationPoliciesWorkerCapacity = config.containerRegistryExpirationPoliciesWorkerCapacity;
    this._containerRegistryTokenExpireDelay = config.containerRegistryTokenExpireDelay;
    this._deactivateDormantUsers = config.deactivateDormantUsers;
    this._deactivateDormantUsersPeriod = config.deactivateDormantUsersPeriod;
    this._decompressArchiveFileTimeout = config.decompressArchiveFileTimeout;
    this._defaultArtifactsExpireIn = config.defaultArtifactsExpireIn;
    this._defaultBranchName = config.defaultBranchName;
    this._defaultBranchProtection = config.defaultBranchProtection;
    this._defaultCiConfigPath = config.defaultCiConfigPath;
    this._defaultGroupVisibility = config.defaultGroupVisibility;
    this._defaultPreferredLanguage = config.defaultPreferredLanguage;
    this._defaultProjectCreation = config.defaultProjectCreation;
    this._defaultProjectVisibility = config.defaultProjectVisibility;
    this._defaultProjectsLimit = config.defaultProjectsLimit;
    this._defaultSnippetVisibility = config.defaultSnippetVisibility;
    this._defaultSyntaxHighlightingTheme = config.defaultSyntaxHighlightingTheme;
    this._deleteInactiveProjects = config.deleteInactiveProjects;
    this._deleteUnconfirmedUsers = config.deleteUnconfirmedUsers;
    this._deletionAdjournedPeriod = config.deletionAdjournedPeriod;
    this._diagramsnetEnabled = config.diagramsnetEnabled;
    this._diagramsnetUrl = config.diagramsnetUrl;
    this._diffMaxFiles = config.diffMaxFiles;
    this._diffMaxLines = config.diffMaxLines;
    this._diffMaxPatchBytes = config.diffMaxPatchBytes;
    this._disableAdminOauthScopes = config.disableAdminOauthScopes;
    this._disableFeedToken = config.disableFeedToken;
    this._disablePersonalAccessTokens = config.disablePersonalAccessTokens;
    this._disabledOauthSignInSources = config.disabledOauthSignInSources;
    this._dnsRebindingProtectionEnabled = config.dnsRebindingProtectionEnabled;
    this._domainAllowlist = config.domainAllowlist;
    this._domainDenylist = config.domainDenylist;
    this._domainDenylistEnabled = config.domainDenylistEnabled;
    this._downstreamPipelineTriggerLimitPerProjectUserSha = config.downstreamPipelineTriggerLimitPerProjectUserSha;
    this._dsaKeyRestriction = config.dsaKeyRestriction;
    this._duoFeaturesEnabled = config.duoFeaturesEnabled;
    this._ecdsaKeyRestriction = config.ecdsaKeyRestriction;
    this._ecdsaSkKeyRestriction = config.ecdsaSkKeyRestriction;
    this._ed25519KeyRestriction = config.ed25519KeyRestriction;
    this._ed25519SkKeyRestriction = config.ed25519SkKeyRestriction;
    this._eksAccessKeyId = config.eksAccessKeyId;
    this._eksAccountId = config.eksAccountId;
    this._eksIntegrationEnabled = config.eksIntegrationEnabled;
    this._eksSecretAccessKey = config.eksSecretAccessKey;
    this._elasticsearchAws = config.elasticsearchAws;
    this._elasticsearchAwsAccessKey = config.elasticsearchAwsAccessKey;
    this._elasticsearchAwsRegion = config.elasticsearchAwsRegion;
    this._elasticsearchAwsSecretAccessKey = config.elasticsearchAwsSecretAccessKey;
    this._elasticsearchIndexedFieldLengthLimit = config.elasticsearchIndexedFieldLengthLimit;
    this._elasticsearchIndexedFileSizeLimitKb = config.elasticsearchIndexedFileSizeLimitKb;
    this._elasticsearchIndexing = config.elasticsearchIndexing;
    this._elasticsearchLimitIndexing = config.elasticsearchLimitIndexing;
    this._elasticsearchMaxBulkConcurrency = config.elasticsearchMaxBulkConcurrency;
    this._elasticsearchMaxBulkSizeMb = config.elasticsearchMaxBulkSizeMb;
    this._elasticsearchMaxCodeIndexingConcurrency = config.elasticsearchMaxCodeIndexingConcurrency;
    this._elasticsearchNamespaceIds = config.elasticsearchNamespaceIds;
    this._elasticsearchPassword = config.elasticsearchPassword;
    this._elasticsearchProjectIds = config.elasticsearchProjectIds;
    this._elasticsearchRequeueWorkers = config.elasticsearchRequeueWorkers;
    this._elasticsearchSearch = config.elasticsearchSearch;
    this._elasticsearchUrl = config.elasticsearchUrl;
    this._elasticsearchUsername = config.elasticsearchUsername;
    this._elasticsearchWorkerNumberOfShards = config.elasticsearchWorkerNumberOfShards;
    this._emailAdditionalText = config.emailAdditionalText;
    this._emailAuthorInBody = config.emailAuthorInBody;
    this._emailConfirmationSetting = config.emailConfirmationSetting;
    this._enableArtifactExternalRedirectWarningPage = config.enableArtifactExternalRedirectWarningPage;
    this._enabledGitAccessProtocol = config.enabledGitAccessProtocol;
    this._enforceNamespaceStorageLimit = config.enforceNamespaceStorageLimit;
    this._enforceTerms = config.enforceTerms;
    this._externalAuthClientCert = config.externalAuthClientCert;
    this._externalAuthClientKey = config.externalAuthClientKey;
    this._externalAuthClientKeyPass = config.externalAuthClientKeyPass;
    this._externalAuthorizationServiceDefaultLabel = config.externalAuthorizationServiceDefaultLabel;
    this._externalAuthorizationServiceEnabled = config.externalAuthorizationServiceEnabled;
    this._externalAuthorizationServiceTimeout = config.externalAuthorizationServiceTimeout;
    this._externalAuthorizationServiceUrl = config.externalAuthorizationServiceUrl;
    this._externalPipelineValidationServiceTimeout = config.externalPipelineValidationServiceTimeout;
    this._externalPipelineValidationServiceToken = config.externalPipelineValidationServiceToken;
    this._externalPipelineValidationServiceUrl = config.externalPipelineValidationServiceUrl;
    this._failedLoginAttemptsUnlockPeriodInMinutes = config.failedLoginAttemptsUnlockPeriodInMinutes;
    this._fileTemplateProjectId = config.fileTemplateProjectId;
    this._firstDayOfWeek = config.firstDayOfWeek;
    this._geoNodeAllowedIps = config.geoNodeAllowedIps;
    this._geoStatusTimeout = config.geoStatusTimeout;
    this._gitRateLimitUsersAlertlist = config.gitRateLimitUsersAlertlist;
    this._gitRateLimitUsersAllowlist = config.gitRateLimitUsersAllowlist;
    this._gitTwoFactorSessionExpiry = config.gitTwoFactorSessionExpiry;
    this._gitalyTimeoutDefault = config.gitalyTimeoutDefault;
    this._gitalyTimeoutFast = config.gitalyTimeoutFast;
    this._gitalyTimeoutMedium = config.gitalyTimeoutMedium;
    this._gitlabShellOperationLimit = config.gitlabShellOperationLimit;
    this._gitpodEnabled = config.gitpodEnabled;
    this._gitpodUrl = config.gitpodUrl;
    this._globallyAllowedIps = config.globallyAllowedIps;
    this._grafanaEnabled = config.grafanaEnabled;
    this._grafanaUrl = config.grafanaUrl;
    this._gravatarEnabled = config.gravatarEnabled;
    this._groupOwnersCanManageDefaultBranchProtection = config.groupOwnersCanManageDefaultBranchProtection;
    this._helpPageHideCommercialContent = config.helpPageHideCommercialContent;
    this._helpPageSupportUrl = config.helpPageSupportUrl;
    this._helpPageText = config.helpPageText;
    this._helpText = config.helpText;
    this._hideThirdPartyOffers = config.hideThirdPartyOffers;
    this._homePageUrl = config.homePageUrl;
    this._housekeepingEnabled = config.housekeepingEnabled;
    this._housekeepingOptimizeRepositoryPeriod = config.housekeepingOptimizeRepositoryPeriod;
    this._htmlEmailsEnabled = config.htmlEmailsEnabled;
    this._id = config.id;
    this._importSources = config.importSources;
    this._inProductMarketingEmailsEnabled = config.inProductMarketingEmailsEnabled;
    this._inactiveProjectsDeleteAfterMonths = config.inactiveProjectsDeleteAfterMonths;
    this._inactiveProjectsMinSizeMb = config.inactiveProjectsMinSizeMb;
    this._inactiveProjectsSendWarningEmailAfterMonths = config.inactiveProjectsSendWarningEmailAfterMonths;
    this._includeOptionalMetricsInServicePing = config.includeOptionalMetricsInServicePing;
    this._invisibleCaptchaEnabled = config.invisibleCaptchaEnabled;
    this._issuesCreateLimit = config.issuesCreateLimit;
    this._jiraConnectApplicationKey = config.jiraConnectApplicationKey;
    this._jiraConnectProxyUrl = config.jiraConnectProxyUrl;
    this._jiraConnectPublicKeyStorageEnabled = config.jiraConnectPublicKeyStorageEnabled;
    this._keepLatestArtifact = config.keepLatestArtifact;
    this._localMarkdownVersion = config.localMarkdownVersion;
    this._lockDuoFeaturesEnabled = config.lockDuoFeaturesEnabled;
    this._lockMembershipsToLdap = config.lockMembershipsToLdap;
    this._mailgunEventsEnabled = config.mailgunEventsEnabled;
    this._mailgunSigningKey = config.mailgunSigningKey;
    this._maintenanceMode = config.maintenanceMode;
    this._maintenanceModeMessage = config.maintenanceModeMessage;
    this._mavenPackageRequestsForwarding = config.mavenPackageRequestsForwarding;
    this._maxArtifactsSize = config.maxArtifactsSize;
    this._maxAttachmentSize = config.maxAttachmentSize;
    this._maxDecompressedArchiveSize = config.maxDecompressedArchiveSize;
    this._maxExportSize = config.maxExportSize;
    this._maxImportRemoteFileSize = config.maxImportRemoteFileSize;
    this._maxImportSize = config.maxImportSize;
    this._maxLoginAttempts = config.maxLoginAttempts;
    this._maxNumberOfRepositoryDownloads = config.maxNumberOfRepositoryDownloads;
    this._maxNumberOfRepositoryDownloadsWithinTimePeriod = config.maxNumberOfRepositoryDownloadsWithinTimePeriod;
    this._maxPagesSize = config.maxPagesSize;
    this._maxPersonalAccessTokenLifetime = config.maxPersonalAccessTokenLifetime;
    this._maxSshKeyLifetime = config.maxSshKeyLifetime;
    this._maxTerraformStateSizeBytes = config.maxTerraformStateSizeBytes;
    this._metricsMethodCallThreshold = config.metricsMethodCallThreshold;
    this._minimumPasswordLength = config.minimumPasswordLength;
    this._mirrorAvailable = config.mirrorAvailable;
    this._mirrorCapacityThreshold = config.mirrorCapacityThreshold;
    this._mirrorMaxCapacity = config.mirrorMaxCapacity;
    this._mirrorMaxDelay = config.mirrorMaxDelay;
    this._npmPackageRequestsForwarding = config.npmPackageRequestsForwarding;
    this._nugetSkipMetadataUrlValidation = config.nugetSkipMetadataUrlValidation;
    this._outboundLocalRequestsWhitelist = config.outboundLocalRequestsWhitelist;
    this._packageMetadataPurlTypes = config.packageMetadataPurlTypes;
    this._packageRegistryAllowAnyoneToPullOption = config.packageRegistryAllowAnyoneToPullOption;
    this._packageRegistryCleanupPoliciesWorkerCapacity = config.packageRegistryCleanupPoliciesWorkerCapacity;
    this._pagesDomainVerificationEnabled = config.pagesDomainVerificationEnabled;
    this._passwordAuthenticationEnabledForGit = config.passwordAuthenticationEnabledForGit;
    this._passwordAuthenticationEnabledForWeb = config.passwordAuthenticationEnabledForWeb;
    this._passwordLowercaseRequired = config.passwordLowercaseRequired;
    this._passwordNumberRequired = config.passwordNumberRequired;
    this._passwordSymbolRequired = config.passwordSymbolRequired;
    this._passwordUppercaseRequired = config.passwordUppercaseRequired;
    this._performanceBarAllowedGroupPath = config.performanceBarAllowedGroupPath;
    this._personalAccessTokenPrefix = config.personalAccessTokenPrefix;
    this._pipelineLimitPerProjectUserSha = config.pipelineLimitPerProjectUserSha;
    this._plantumlEnabled = config.plantumlEnabled;
    this._plantumlUrl = config.plantumlUrl;
    this._pollingIntervalMultiplier = config.pollingIntervalMultiplier;
    this._projectExportEnabled = config.projectExportEnabled;
    this._projectJobsApiRateLimit = config.projectJobsApiRateLimit;
    this._projectsApiRateLimitUnauthenticated = config.projectsApiRateLimitUnauthenticated;
    this._prometheusMetricsEnabled = config.prometheusMetricsEnabled;
    this._protectedCiVariables = config.protectedCiVariables;
    this._pushEventActivitiesLimit = config.pushEventActivitiesLimit;
    this._pushEventHooksLimit = config.pushEventHooksLimit;
    this._pypiPackageRequestsForwarding = config.pypiPackageRequestsForwarding;
    this._rateLimitingResponseText = config.rateLimitingResponseText;
    this._rawBlobRequestLimit = config.rawBlobRequestLimit;
    this._recaptchaEnabled = config.recaptchaEnabled;
    this._recaptchaPrivateKey = config.recaptchaPrivateKey;
    this._recaptchaSiteKey = config.recaptchaSiteKey;
    this._receiveMaxInputSize = config.receiveMaxInputSize;
    this._receptiveClusterAgentsEnabled = config.receptiveClusterAgentsEnabled;
    this._rememberMeEnabled = config.rememberMeEnabled;
    this._repositoryChecksEnabled = config.repositoryChecksEnabled;
    this._repositorySizeLimit = config.repositorySizeLimit;
    this._repositoryStoragesWeighted = config.repositoryStoragesWeighted;
    this._requireAdminApprovalAfterUserSignup = config.requireAdminApprovalAfterUserSignup;
    this._requireAdminTwoFactorAuthentication = config.requireAdminTwoFactorAuthentication;
    this._requirePersonalAccessTokenExpiry = config.requirePersonalAccessTokenExpiry;
    this._requireTwoFactorAuthentication = config.requireTwoFactorAuthentication;
    this._restrictedVisibilityLevels = config.restrictedVisibilityLevels;
    this._rsaKeyRestriction = config.rsaKeyRestriction;
    this._searchRateLimit = config.searchRateLimit;
    this._searchRateLimitUnauthenticated = config.searchRateLimitUnauthenticated;
    this._securityApprovalPoliciesLimit = config.securityApprovalPoliciesLimit;
    this._securityPolicyGlobalGroupApproversEnabled = config.securityPolicyGlobalGroupApproversEnabled;
    this._securityTxtContent = config.securityTxtContent;
    this._sendUserConfirmationEmail = config.sendUserConfirmationEmail;
    this._serviceAccessTokensExpirationEnforced = config.serviceAccessTokensExpirationEnforced;
    this._sessionExpireDelay = config.sessionExpireDelay;
    this._sharedRunnersEnabled = config.sharedRunnersEnabled;
    this._sharedRunnersMinutes = config.sharedRunnersMinutes;
    this._sharedRunnersText = config.sharedRunnersText;
    this._sidekiqJobLimiterCompressionThresholdBytes = config.sidekiqJobLimiterCompressionThresholdBytes;
    this._sidekiqJobLimiterLimitBytes = config.sidekiqJobLimiterLimitBytes;
    this._sidekiqJobLimiterMode = config.sidekiqJobLimiterMode;
    this._signInText = config.signInText;
    this._signupEnabled = config.signupEnabled;
    this._silentAdminExportsEnabled = config.silentAdminExportsEnabled;
    this._silentModeEnabled = config.silentModeEnabled;
    this._slackAppEnabled = config.slackAppEnabled;
    this._slackAppId = config.slackAppId;
    this._slackAppSecret = config.slackAppSecret;
    this._slackAppSigningSecret = config.slackAppSigningSecret;
    this._slackAppVerificationToken = config.slackAppVerificationToken;
    this._snippetSizeLimit = config.snippetSizeLimit;
    this._snowplowAppId = config.snowplowAppId;
    this._snowplowCollectorHostname = config.snowplowCollectorHostname;
    this._snowplowCookieDomain = config.snowplowCookieDomain;
    this._snowplowDatabaseCollectorHostname = config.snowplowDatabaseCollectorHostname;
    this._snowplowEnabled = config.snowplowEnabled;
    this._sourcegraphEnabled = config.sourcegraphEnabled;
    this._sourcegraphPublicOnly = config.sourcegraphPublicOnly;
    this._sourcegraphUrl = config.sourcegraphUrl;
    this._spamCheckApiKey = config.spamCheckApiKey;
    this._spamCheckEndpointEnabled = config.spamCheckEndpointEnabled;
    this._spamCheckEndpointUrl = config.spamCheckEndpointUrl;
    this._staticObjectsExternalStorageAuthToken = config.staticObjectsExternalStorageAuthToken;
    this._staticObjectsExternalStorageUrl = config.staticObjectsExternalStorageUrl;
    this._suggestPipelineEnabled = config.suggestPipelineEnabled;
    this._terminalMaxSessionTime = config.terminalMaxSessionTime;
    this._terms = config.terms;
    this._throttleAuthenticatedApiEnabled = config.throttleAuthenticatedApiEnabled;
    this._throttleAuthenticatedApiPeriodInSeconds = config.throttleAuthenticatedApiPeriodInSeconds;
    this._throttleAuthenticatedApiRequestsPerPeriod = config.throttleAuthenticatedApiRequestsPerPeriod;
    this._throttleAuthenticatedPackagesApiEnabled = config.throttleAuthenticatedPackagesApiEnabled;
    this._throttleAuthenticatedPackagesApiPeriodInSeconds = config.throttleAuthenticatedPackagesApiPeriodInSeconds;
    this._throttleAuthenticatedPackagesApiRequestsPerPeriod = config.throttleAuthenticatedPackagesApiRequestsPerPeriod;
    this._throttleAuthenticatedWebEnabled = config.throttleAuthenticatedWebEnabled;
    this._throttleAuthenticatedWebPeriodInSeconds = config.throttleAuthenticatedWebPeriodInSeconds;
    this._throttleAuthenticatedWebRequestsPerPeriod = config.throttleAuthenticatedWebRequestsPerPeriod;
    this._throttleUnauthenticatedApiEnabled = config.throttleUnauthenticatedApiEnabled;
    this._throttleUnauthenticatedApiPeriodInSeconds = config.throttleUnauthenticatedApiPeriodInSeconds;
    this._throttleUnauthenticatedApiRequestsPerPeriod = config.throttleUnauthenticatedApiRequestsPerPeriod;
    this._throttleUnauthenticatedPackagesApiEnabled = config.throttleUnauthenticatedPackagesApiEnabled;
    this._throttleUnauthenticatedPackagesApiPeriodInSeconds = config.throttleUnauthenticatedPackagesApiPeriodInSeconds;
    this._throttleUnauthenticatedPackagesApiRequestsPerPeriod = config.throttleUnauthenticatedPackagesApiRequestsPerPeriod;
    this._throttleUnauthenticatedWebEnabled = config.throttleUnauthenticatedWebEnabled;
    this._throttleUnauthenticatedWebPeriodInSeconds = config.throttleUnauthenticatedWebPeriodInSeconds;
    this._throttleUnauthenticatedWebRequestsPerPeriod = config.throttleUnauthenticatedWebRequestsPerPeriod;
    this._timeTrackingLimitToHours = config.timeTrackingLimitToHours;
    this._twoFactorGracePeriod = config.twoFactorGracePeriod;
    this._unconfirmedUsersDeleteAfterDays = config.unconfirmedUsersDeleteAfterDays;
    this._uniqueIpsLimitEnabled = config.uniqueIpsLimitEnabled;
    this._uniqueIpsLimitPerUser = config.uniqueIpsLimitPerUser;
    this._uniqueIpsLimitTimeWindow = config.uniqueIpsLimitTimeWindow;
    this._updateRunnerVersionsEnabled = config.updateRunnerVersionsEnabled;
    this._usagePingEnabled = config.usagePingEnabled;
    this._useClickhouseForAnalytics = config.useClickhouseForAnalytics;
    this._userDeactivationEmailsEnabled = config.userDeactivationEmailsEnabled;
    this._userDefaultExternal = config.userDefaultExternal;
    this._userDefaultInternalRegex = config.userDefaultInternalRegex;
    this._userDefaultsToPrivateProfile = config.userDefaultsToPrivateProfile;
    this._userOauthApplications = config.userOauthApplications;
    this._userShowAddSshKeyMessage = config.userShowAddSshKeyMessage;
    this._validRunnerRegistrars = config.validRunnerRegistrars;
    this._versionCheckEnabled = config.versionCheckEnabled;
    this._webIdeClientsidePreviewEnabled = config.webIdeClientsidePreviewEnabled;
    this._whatsNewVariant = config.whatsNewVariant;
    this._wikiPageMaxContentBytes = config.wikiPageMaxContentBytes;
    this._defaultBranchProtectionDefaults.internalValue = config.defaultBranchProtectionDefaults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abuse_notification_email - computed: true, optional: true, required: false
  private _abuseNotificationEmail?: string; 
  public get abuseNotificationEmail() {
    return this.getStringAttribute('abuse_notification_email');
  }
  public set abuseNotificationEmail(value: string) {
    this._abuseNotificationEmail = value;
  }
  public resetAbuseNotificationEmail() {
    this._abuseNotificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abuseNotificationEmailInput() {
    return this._abuseNotificationEmail;
  }

  // admin_mode - computed: true, optional: true, required: false
  private _adminMode?: boolean | cdktf.IResolvable; 
  public get adminMode() {
    return this.getBooleanAttribute('admin_mode');
  }
  public set adminMode(value: boolean | cdktf.IResolvable) {
    this._adminMode = value;
  }
  public resetAdminMode() {
    this._adminMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminModeInput() {
    return this._adminMode;
  }

  // after_sign_out_path - computed: true, optional: true, required: false
  private _afterSignOutPath?: string; 
  public get afterSignOutPath() {
    return this.getStringAttribute('after_sign_out_path');
  }
  public set afterSignOutPath(value: string) {
    this._afterSignOutPath = value;
  }
  public resetAfterSignOutPath() {
    this._afterSignOutPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterSignOutPathInput() {
    return this._afterSignOutPath;
  }

  // after_sign_up_text - computed: true, optional: true, required: false
  private _afterSignUpText?: string; 
  public get afterSignUpText() {
    return this.getStringAttribute('after_sign_up_text');
  }
  public set afterSignUpText(value: string) {
    this._afterSignUpText = value;
  }
  public resetAfterSignUpText() {
    this._afterSignUpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterSignUpTextInput() {
    return this._afterSignUpText;
  }

  // akismet_api_key - computed: true, optional: true, required: false
  private _akismetApiKey?: string; 
  public get akismetApiKey() {
    return this.getStringAttribute('akismet_api_key');
  }
  public set akismetApiKey(value: string) {
    this._akismetApiKey = value;
  }
  public resetAkismetApiKey() {
    this._akismetApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akismetApiKeyInput() {
    return this._akismetApiKey;
  }

  // akismet_enabled - computed: true, optional: true, required: false
  private _akismetEnabled?: boolean | cdktf.IResolvable; 
  public get akismetEnabled() {
    return this.getBooleanAttribute('akismet_enabled');
  }
  public set akismetEnabled(value: boolean | cdktf.IResolvable) {
    this._akismetEnabled = value;
  }
  public resetAkismetEnabled() {
    this._akismetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akismetEnabledInput() {
    return this._akismetEnabled;
  }

  // allow_account_deletion - computed: true, optional: true, required: false
  private _allowAccountDeletion?: boolean | cdktf.IResolvable; 
  public get allowAccountDeletion() {
    return this.getBooleanAttribute('allow_account_deletion');
  }
  public set allowAccountDeletion(value: boolean | cdktf.IResolvable) {
    this._allowAccountDeletion = value;
  }
  public resetAllowAccountDeletion() {
    this._allowAccountDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccountDeletionInput() {
    return this._allowAccountDeletion;
  }

  // allow_group_owners_to_manage_ldap - computed: true, optional: true, required: false
  private _allowGroupOwnersToManageLdap?: boolean | cdktf.IResolvable; 
  public get allowGroupOwnersToManageLdap() {
    return this.getBooleanAttribute('allow_group_owners_to_manage_ldap');
  }
  public set allowGroupOwnersToManageLdap(value: boolean | cdktf.IResolvable) {
    this._allowGroupOwnersToManageLdap = value;
  }
  public resetAllowGroupOwnersToManageLdap() {
    this._allowGroupOwnersToManageLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGroupOwnersToManageLdapInput() {
    return this._allowGroupOwnersToManageLdap;
  }

  // allow_local_requests_from_system_hooks - computed: true, optional: true, required: false
  private _allowLocalRequestsFromSystemHooks?: boolean | cdktf.IResolvable; 
  public get allowLocalRequestsFromSystemHooks() {
    return this.getBooleanAttribute('allow_local_requests_from_system_hooks');
  }
  public set allowLocalRequestsFromSystemHooks(value: boolean | cdktf.IResolvable) {
    this._allowLocalRequestsFromSystemHooks = value;
  }
  public resetAllowLocalRequestsFromSystemHooks() {
    this._allowLocalRequestsFromSystemHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalRequestsFromSystemHooksInput() {
    return this._allowLocalRequestsFromSystemHooks;
  }

  // allow_local_requests_from_web_hooks_and_services - computed: true, optional: true, required: false
  private _allowLocalRequestsFromWebHooksAndServices?: boolean | cdktf.IResolvable; 
  public get allowLocalRequestsFromWebHooksAndServices() {
    return this.getBooleanAttribute('allow_local_requests_from_web_hooks_and_services');
  }
  public set allowLocalRequestsFromWebHooksAndServices(value: boolean | cdktf.IResolvable) {
    this._allowLocalRequestsFromWebHooksAndServices = value;
  }
  public resetAllowLocalRequestsFromWebHooksAndServices() {
    this._allowLocalRequestsFromWebHooksAndServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalRequestsFromWebHooksAndServicesInput() {
    return this._allowLocalRequestsFromWebHooksAndServices;
  }

  // allow_project_creation_for_guest_and_below - computed: true, optional: true, required: false
  private _allowProjectCreationForGuestAndBelow?: boolean | cdktf.IResolvable; 
  public get allowProjectCreationForGuestAndBelow() {
    return this.getBooleanAttribute('allow_project_creation_for_guest_and_below');
  }
  public set allowProjectCreationForGuestAndBelow(value: boolean | cdktf.IResolvable) {
    this._allowProjectCreationForGuestAndBelow = value;
  }
  public resetAllowProjectCreationForGuestAndBelow() {
    this._allowProjectCreationForGuestAndBelow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowProjectCreationForGuestAndBelowInput() {
    return this._allowProjectCreationForGuestAndBelow;
  }

  // allow_runner_registration_token - computed: true, optional: true, required: false
  private _allowRunnerRegistrationToken?: boolean | cdktf.IResolvable; 
  public get allowRunnerRegistrationToken() {
    return this.getBooleanAttribute('allow_runner_registration_token');
  }
  public set allowRunnerRegistrationToken(value: boolean | cdktf.IResolvable) {
    this._allowRunnerRegistrationToken = value;
  }
  public resetAllowRunnerRegistrationToken() {
    this._allowRunnerRegistrationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRunnerRegistrationTokenInput() {
    return this._allowRunnerRegistrationToken;
  }

  // archive_builds_in_human_readable - computed: true, optional: true, required: false
  private _archiveBuildsInHumanReadable?: string; 
  public get archiveBuildsInHumanReadable() {
    return this.getStringAttribute('archive_builds_in_human_readable');
  }
  public set archiveBuildsInHumanReadable(value: string) {
    this._archiveBuildsInHumanReadable = value;
  }
  public resetArchiveBuildsInHumanReadable() {
    this._archiveBuildsInHumanReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBuildsInHumanReadableInput() {
    return this._archiveBuildsInHumanReadable;
  }

  // asciidoc_max_includes - computed: true, optional: true, required: false
  private _asciidocMaxIncludes?: number; 
  public get asciidocMaxIncludes() {
    return this.getNumberAttribute('asciidoc_max_includes');
  }
  public set asciidocMaxIncludes(value: number) {
    this._asciidocMaxIncludes = value;
  }
  public resetAsciidocMaxIncludes() {
    this._asciidocMaxIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asciidocMaxIncludesInput() {
    return this._asciidocMaxIncludes;
  }

  // asset_proxy_allowlist - computed: true, optional: true, required: false
  private _assetProxyAllowlist?: string[]; 
  public get assetProxyAllowlist() {
    return this.getListAttribute('asset_proxy_allowlist');
  }
  public set assetProxyAllowlist(value: string[]) {
    this._assetProxyAllowlist = value;
  }
  public resetAssetProxyAllowlist() {
    this._assetProxyAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetProxyAllowlistInput() {
    return this._assetProxyAllowlist;
  }

  // asset_proxy_enabled - computed: true, optional: true, required: false
  private _assetProxyEnabled?: boolean | cdktf.IResolvable; 
  public get assetProxyEnabled() {
    return this.getBooleanAttribute('asset_proxy_enabled');
  }
  public set assetProxyEnabled(value: boolean | cdktf.IResolvable) {
    this._assetProxyEnabled = value;
  }
  public resetAssetProxyEnabled() {
    this._assetProxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetProxyEnabledInput() {
    return this._assetProxyEnabled;
  }

  // asset_proxy_secret_key - computed: true, optional: true, required: false
  private _assetProxySecretKey?: string; 
  public get assetProxySecretKey() {
    return this.getStringAttribute('asset_proxy_secret_key');
  }
  public set assetProxySecretKey(value: string) {
    this._assetProxySecretKey = value;
  }
  public resetAssetProxySecretKey() {
    this._assetProxySecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetProxySecretKeyInput() {
    return this._assetProxySecretKey;
  }

  // asset_proxy_url - computed: true, optional: true, required: false
  private _assetProxyUrl?: string; 
  public get assetProxyUrl() {
    return this.getStringAttribute('asset_proxy_url');
  }
  public set assetProxyUrl(value: string) {
    this._assetProxyUrl = value;
  }
  public resetAssetProxyUrl() {
    this._assetProxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetProxyUrlInput() {
    return this._assetProxyUrl;
  }

  // authorized_keys_enabled - computed: true, optional: true, required: false
  private _authorizedKeysEnabled?: boolean | cdktf.IResolvable; 
  public get authorizedKeysEnabled() {
    return this.getBooleanAttribute('authorized_keys_enabled');
  }
  public set authorizedKeysEnabled(value: boolean | cdktf.IResolvable) {
    this._authorizedKeysEnabled = value;
  }
  public resetAuthorizedKeysEnabled() {
    this._authorizedKeysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysEnabledInput() {
    return this._authorizedKeysEnabled;
  }

  // auto_ban_user_on_excessive_projects_download - computed: true, optional: true, required: false
  private _autoBanUserOnExcessiveProjectsDownload?: boolean | cdktf.IResolvable; 
  public get autoBanUserOnExcessiveProjectsDownload() {
    return this.getBooleanAttribute('auto_ban_user_on_excessive_projects_download');
  }
  public set autoBanUserOnExcessiveProjectsDownload(value: boolean | cdktf.IResolvable) {
    this._autoBanUserOnExcessiveProjectsDownload = value;
  }
  public resetAutoBanUserOnExcessiveProjectsDownload() {
    this._autoBanUserOnExcessiveProjectsDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBanUserOnExcessiveProjectsDownloadInput() {
    return this._autoBanUserOnExcessiveProjectsDownload;
  }

  // auto_devops_domain - computed: true, optional: true, required: false
  private _autoDevopsDomain?: string; 
  public get autoDevopsDomain() {
    return this.getStringAttribute('auto_devops_domain');
  }
  public set autoDevopsDomain(value: string) {
    this._autoDevopsDomain = value;
  }
  public resetAutoDevopsDomain() {
    this._autoDevopsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDevopsDomainInput() {
    return this._autoDevopsDomain;
  }

  // auto_devops_enabled - computed: true, optional: true, required: false
  private _autoDevopsEnabled?: boolean | cdktf.IResolvable; 
  public get autoDevopsEnabled() {
    return this.getBooleanAttribute('auto_devops_enabled');
  }
  public set autoDevopsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDevopsEnabled = value;
  }
  public resetAutoDevopsEnabled() {
    this._autoDevopsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDevopsEnabledInput() {
    return this._autoDevopsEnabled;
  }

  // automatic_purchased_storage_allocation - computed: true, optional: true, required: false
  private _automaticPurchasedStorageAllocation?: boolean | cdktf.IResolvable; 
  public get automaticPurchasedStorageAllocation() {
    return this.getBooleanAttribute('automatic_purchased_storage_allocation');
  }
  public set automaticPurchasedStorageAllocation(value: boolean | cdktf.IResolvable) {
    this._automaticPurchasedStorageAllocation = value;
  }
  public resetAutomaticPurchasedStorageAllocation() {
    this._automaticPurchasedStorageAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticPurchasedStorageAllocationInput() {
    return this._automaticPurchasedStorageAllocation;
  }

  // bulk_import_concurrent_pipeline_batch_limit - computed: true, optional: true, required: false
  private _bulkImportConcurrentPipelineBatchLimit?: number; 
  public get bulkImportConcurrentPipelineBatchLimit() {
    return this.getNumberAttribute('bulk_import_concurrent_pipeline_batch_limit');
  }
  public set bulkImportConcurrentPipelineBatchLimit(value: number) {
    this._bulkImportConcurrentPipelineBatchLimit = value;
  }
  public resetBulkImportConcurrentPipelineBatchLimit() {
    this._bulkImportConcurrentPipelineBatchLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkImportConcurrentPipelineBatchLimitInput() {
    return this._bulkImportConcurrentPipelineBatchLimit;
  }

  // bulk_import_enabled - computed: true, optional: true, required: false
  private _bulkImportEnabled?: boolean | cdktf.IResolvable; 
  public get bulkImportEnabled() {
    return this.getBooleanAttribute('bulk_import_enabled');
  }
  public set bulkImportEnabled(value: boolean | cdktf.IResolvable) {
    this._bulkImportEnabled = value;
  }
  public resetBulkImportEnabled() {
    this._bulkImportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkImportEnabledInput() {
    return this._bulkImportEnabled;
  }

  // bulk_import_max_download_file_size - computed: true, optional: true, required: false
  private _bulkImportMaxDownloadFileSize?: number; 
  public get bulkImportMaxDownloadFileSize() {
    return this.getNumberAttribute('bulk_import_max_download_file_size');
  }
  public set bulkImportMaxDownloadFileSize(value: number) {
    this._bulkImportMaxDownloadFileSize = value;
  }
  public resetBulkImportMaxDownloadFileSize() {
    this._bulkImportMaxDownloadFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkImportMaxDownloadFileSizeInput() {
    return this._bulkImportMaxDownloadFileSize;
  }

  // can_create_group - computed: true, optional: true, required: false
  private _canCreateGroup?: boolean | cdktf.IResolvable; 
  public get canCreateGroup() {
    return this.getBooleanAttribute('can_create_group');
  }
  public set canCreateGroup(value: boolean | cdktf.IResolvable) {
    this._canCreateGroup = value;
  }
  public resetCanCreateGroup() {
    this._canCreateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateGroupInput() {
    return this._canCreateGroup;
  }

  // check_namespace_plan - computed: true, optional: true, required: false
  private _checkNamespacePlan?: boolean | cdktf.IResolvable; 
  public get checkNamespacePlan() {
    return this.getBooleanAttribute('check_namespace_plan');
  }
  public set checkNamespacePlan(value: boolean | cdktf.IResolvable) {
    this._checkNamespacePlan = value;
  }
  public resetCheckNamespacePlan() {
    this._checkNamespacePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNamespacePlanInput() {
    return this._checkNamespacePlan;
  }

  // ci_max_includes - computed: true, optional: true, required: false
  private _ciMaxIncludes?: number; 
  public get ciMaxIncludes() {
    return this.getNumberAttribute('ci_max_includes');
  }
  public set ciMaxIncludes(value: number) {
    this._ciMaxIncludes = value;
  }
  public resetCiMaxIncludes() {
    this._ciMaxIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciMaxIncludesInput() {
    return this._ciMaxIncludes;
  }

  // ci_max_total_yaml_size_bytes - computed: true, optional: true, required: false
  private _ciMaxTotalYamlSizeBytes?: number; 
  public get ciMaxTotalYamlSizeBytes() {
    return this.getNumberAttribute('ci_max_total_yaml_size_bytes');
  }
  public set ciMaxTotalYamlSizeBytes(value: number) {
    this._ciMaxTotalYamlSizeBytes = value;
  }
  public resetCiMaxTotalYamlSizeBytes() {
    this._ciMaxTotalYamlSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciMaxTotalYamlSizeBytesInput() {
    return this._ciMaxTotalYamlSizeBytes;
  }

  // commit_email_hostname - computed: true, optional: true, required: false
  private _commitEmailHostname?: string; 
  public get commitEmailHostname() {
    return this.getStringAttribute('commit_email_hostname');
  }
  public set commitEmailHostname(value: string) {
    this._commitEmailHostname = value;
  }
  public resetCommitEmailHostname() {
    this._commitEmailHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitEmailHostnameInput() {
    return this._commitEmailHostname;
  }

  // concurrent_bitbucket_import_jobs_limit - computed: true, optional: true, required: false
  private _concurrentBitbucketImportJobsLimit?: number; 
  public get concurrentBitbucketImportJobsLimit() {
    return this.getNumberAttribute('concurrent_bitbucket_import_jobs_limit');
  }
  public set concurrentBitbucketImportJobsLimit(value: number) {
    this._concurrentBitbucketImportJobsLimit = value;
  }
  public resetConcurrentBitbucketImportJobsLimit() {
    this._concurrentBitbucketImportJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentBitbucketImportJobsLimitInput() {
    return this._concurrentBitbucketImportJobsLimit;
  }

  // concurrent_bitbucket_server_import_jobs_limit - computed: true, optional: true, required: false
  private _concurrentBitbucketServerImportJobsLimit?: number; 
  public get concurrentBitbucketServerImportJobsLimit() {
    return this.getNumberAttribute('concurrent_bitbucket_server_import_jobs_limit');
  }
  public set concurrentBitbucketServerImportJobsLimit(value: number) {
    this._concurrentBitbucketServerImportJobsLimit = value;
  }
  public resetConcurrentBitbucketServerImportJobsLimit() {
    this._concurrentBitbucketServerImportJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentBitbucketServerImportJobsLimitInput() {
    return this._concurrentBitbucketServerImportJobsLimit;
  }

  // concurrent_github_import_jobs_limit - computed: true, optional: true, required: false
  private _concurrentGithubImportJobsLimit?: number; 
  public get concurrentGithubImportJobsLimit() {
    return this.getNumberAttribute('concurrent_github_import_jobs_limit');
  }
  public set concurrentGithubImportJobsLimit(value: number) {
    this._concurrentGithubImportJobsLimit = value;
  }
  public resetConcurrentGithubImportJobsLimit() {
    this._concurrentGithubImportJobsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentGithubImportJobsLimitInput() {
    return this._concurrentGithubImportJobsLimit;
  }

  // container_expiration_policies_enable_historic_entries - computed: true, optional: true, required: false
  private _containerExpirationPoliciesEnableHistoricEntries?: boolean | cdktf.IResolvable; 
  public get containerExpirationPoliciesEnableHistoricEntries() {
    return this.getBooleanAttribute('container_expiration_policies_enable_historic_entries');
  }
  public set containerExpirationPoliciesEnableHistoricEntries(value: boolean | cdktf.IResolvable) {
    this._containerExpirationPoliciesEnableHistoricEntries = value;
  }
  public resetContainerExpirationPoliciesEnableHistoricEntries() {
    this._containerExpirationPoliciesEnableHistoricEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExpirationPoliciesEnableHistoricEntriesInput() {
    return this._containerExpirationPoliciesEnableHistoricEntries;
  }

  // container_registry_cleanup_tags_service_max_list_size - computed: true, optional: true, required: false
  private _containerRegistryCleanupTagsServiceMaxListSize?: number; 
  public get containerRegistryCleanupTagsServiceMaxListSize() {
    return this.getNumberAttribute('container_registry_cleanup_tags_service_max_list_size');
  }
  public set containerRegistryCleanupTagsServiceMaxListSize(value: number) {
    this._containerRegistryCleanupTagsServiceMaxListSize = value;
  }
  public resetContainerRegistryCleanupTagsServiceMaxListSize() {
    this._containerRegistryCleanupTagsServiceMaxListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryCleanupTagsServiceMaxListSizeInput() {
    return this._containerRegistryCleanupTagsServiceMaxListSize;
  }

  // container_registry_delete_tags_service_timeout - computed: true, optional: true, required: false
  private _containerRegistryDeleteTagsServiceTimeout?: number; 
  public get containerRegistryDeleteTagsServiceTimeout() {
    return this.getNumberAttribute('container_registry_delete_tags_service_timeout');
  }
  public set containerRegistryDeleteTagsServiceTimeout(value: number) {
    this._containerRegistryDeleteTagsServiceTimeout = value;
  }
  public resetContainerRegistryDeleteTagsServiceTimeout() {
    this._containerRegistryDeleteTagsServiceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryDeleteTagsServiceTimeoutInput() {
    return this._containerRegistryDeleteTagsServiceTimeout;
  }

  // container_registry_expiration_policies_caching - computed: true, optional: true, required: false
  private _containerRegistryExpirationPoliciesCaching?: boolean | cdktf.IResolvable; 
  public get containerRegistryExpirationPoliciesCaching() {
    return this.getBooleanAttribute('container_registry_expiration_policies_caching');
  }
  public set containerRegistryExpirationPoliciesCaching(value: boolean | cdktf.IResolvable) {
    this._containerRegistryExpirationPoliciesCaching = value;
  }
  public resetContainerRegistryExpirationPoliciesCaching() {
    this._containerRegistryExpirationPoliciesCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryExpirationPoliciesCachingInput() {
    return this._containerRegistryExpirationPoliciesCaching;
  }

  // container_registry_expiration_policies_worker_capacity - computed: true, optional: true, required: false
  private _containerRegistryExpirationPoliciesWorkerCapacity?: number; 
  public get containerRegistryExpirationPoliciesWorkerCapacity() {
    return this.getNumberAttribute('container_registry_expiration_policies_worker_capacity');
  }
  public set containerRegistryExpirationPoliciesWorkerCapacity(value: number) {
    this._containerRegistryExpirationPoliciesWorkerCapacity = value;
  }
  public resetContainerRegistryExpirationPoliciesWorkerCapacity() {
    this._containerRegistryExpirationPoliciesWorkerCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryExpirationPoliciesWorkerCapacityInput() {
    return this._containerRegistryExpirationPoliciesWorkerCapacity;
  }

  // container_registry_token_expire_delay - computed: true, optional: true, required: false
  private _containerRegistryTokenExpireDelay?: number; 
  public get containerRegistryTokenExpireDelay() {
    return this.getNumberAttribute('container_registry_token_expire_delay');
  }
  public set containerRegistryTokenExpireDelay(value: number) {
    this._containerRegistryTokenExpireDelay = value;
  }
  public resetContainerRegistryTokenExpireDelay() {
    this._containerRegistryTokenExpireDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryTokenExpireDelayInput() {
    return this._containerRegistryTokenExpireDelay;
  }

  // deactivate_dormant_users - computed: true, optional: true, required: false
  private _deactivateDormantUsers?: boolean | cdktf.IResolvable; 
  public get deactivateDormantUsers() {
    return this.getBooleanAttribute('deactivate_dormant_users');
  }
  public set deactivateDormantUsers(value: boolean | cdktf.IResolvable) {
    this._deactivateDormantUsers = value;
  }
  public resetDeactivateDormantUsers() {
    this._deactivateDormantUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateDormantUsersInput() {
    return this._deactivateDormantUsers;
  }

  // deactivate_dormant_users_period - computed: true, optional: true, required: false
  private _deactivateDormantUsersPeriod?: number; 
  public get deactivateDormantUsersPeriod() {
    return this.getNumberAttribute('deactivate_dormant_users_period');
  }
  public set deactivateDormantUsersPeriod(value: number) {
    this._deactivateDormantUsersPeriod = value;
  }
  public resetDeactivateDormantUsersPeriod() {
    this._deactivateDormantUsersPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateDormantUsersPeriodInput() {
    return this._deactivateDormantUsersPeriod;
  }

  // decompress_archive_file_timeout - computed: true, optional: true, required: false
  private _decompressArchiveFileTimeout?: number; 
  public get decompressArchiveFileTimeout() {
    return this.getNumberAttribute('decompress_archive_file_timeout');
  }
  public set decompressArchiveFileTimeout(value: number) {
    this._decompressArchiveFileTimeout = value;
  }
  public resetDecompressArchiveFileTimeout() {
    this._decompressArchiveFileTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressArchiveFileTimeoutInput() {
    return this._decompressArchiveFileTimeout;
  }

  // default_artifacts_expire_in - computed: true, optional: true, required: false
  private _defaultArtifactsExpireIn?: string; 
  public get defaultArtifactsExpireIn() {
    return this.getStringAttribute('default_artifacts_expire_in');
  }
  public set defaultArtifactsExpireIn(value: string) {
    this._defaultArtifactsExpireIn = value;
  }
  public resetDefaultArtifactsExpireIn() {
    this._defaultArtifactsExpireIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultArtifactsExpireInInput() {
    return this._defaultArtifactsExpireIn;
  }

  // default_branch_name - computed: true, optional: true, required: false
  private _defaultBranchName?: string; 
  public get defaultBranchName() {
    return this.getStringAttribute('default_branch_name');
  }
  public set defaultBranchName(value: string) {
    this._defaultBranchName = value;
  }
  public resetDefaultBranchName() {
    this._defaultBranchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchNameInput() {
    return this._defaultBranchName;
  }

  // default_branch_protection - computed: true, optional: true, required: false
  private _defaultBranchProtection?: number; 
  public get defaultBranchProtection() {
    return this.getNumberAttribute('default_branch_protection');
  }
  public set defaultBranchProtection(value: number) {
    this._defaultBranchProtection = value;
  }
  public resetDefaultBranchProtection() {
    this._defaultBranchProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchProtectionInput() {
    return this._defaultBranchProtection;
  }

  // default_ci_config_path - computed: true, optional: true, required: false
  private _defaultCiConfigPath?: string; 
  public get defaultCiConfigPath() {
    return this.getStringAttribute('default_ci_config_path');
  }
  public set defaultCiConfigPath(value: string) {
    this._defaultCiConfigPath = value;
  }
  public resetDefaultCiConfigPath() {
    this._defaultCiConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCiConfigPathInput() {
    return this._defaultCiConfigPath;
  }

  // default_group_visibility - computed: true, optional: true, required: false
  private _defaultGroupVisibility?: string; 
  public get defaultGroupVisibility() {
    return this.getStringAttribute('default_group_visibility');
  }
  public set defaultGroupVisibility(value: string) {
    this._defaultGroupVisibility = value;
  }
  public resetDefaultGroupVisibility() {
    this._defaultGroupVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGroupVisibilityInput() {
    return this._defaultGroupVisibility;
  }

  // default_preferred_language - computed: true, optional: true, required: false
  private _defaultPreferredLanguage?: string; 
  public get defaultPreferredLanguage() {
    return this.getStringAttribute('default_preferred_language');
  }
  public set defaultPreferredLanguage(value: string) {
    this._defaultPreferredLanguage = value;
  }
  public resetDefaultPreferredLanguage() {
    this._defaultPreferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPreferredLanguageInput() {
    return this._defaultPreferredLanguage;
  }

  // default_project_creation - computed: true, optional: true, required: false
  private _defaultProjectCreation?: number; 
  public get defaultProjectCreation() {
    return this.getNumberAttribute('default_project_creation');
  }
  public set defaultProjectCreation(value: number) {
    this._defaultProjectCreation = value;
  }
  public resetDefaultProjectCreation() {
    this._defaultProjectCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProjectCreationInput() {
    return this._defaultProjectCreation;
  }

  // default_project_visibility - computed: true, optional: true, required: false
  private _defaultProjectVisibility?: string; 
  public get defaultProjectVisibility() {
    return this.getStringAttribute('default_project_visibility');
  }
  public set defaultProjectVisibility(value: string) {
    this._defaultProjectVisibility = value;
  }
  public resetDefaultProjectVisibility() {
    this._defaultProjectVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProjectVisibilityInput() {
    return this._defaultProjectVisibility;
  }

  // default_projects_limit - computed: true, optional: true, required: false
  private _defaultProjectsLimit?: number; 
  public get defaultProjectsLimit() {
    return this.getNumberAttribute('default_projects_limit');
  }
  public set defaultProjectsLimit(value: number) {
    this._defaultProjectsLimit = value;
  }
  public resetDefaultProjectsLimit() {
    this._defaultProjectsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProjectsLimitInput() {
    return this._defaultProjectsLimit;
  }

  // default_snippet_visibility - computed: true, optional: true, required: false
  private _defaultSnippetVisibility?: string; 
  public get defaultSnippetVisibility() {
    return this.getStringAttribute('default_snippet_visibility');
  }
  public set defaultSnippetVisibility(value: string) {
    this._defaultSnippetVisibility = value;
  }
  public resetDefaultSnippetVisibility() {
    this._defaultSnippetVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSnippetVisibilityInput() {
    return this._defaultSnippetVisibility;
  }

  // default_syntax_highlighting_theme - computed: true, optional: true, required: false
  private _defaultSyntaxHighlightingTheme?: number; 
  public get defaultSyntaxHighlightingTheme() {
    return this.getNumberAttribute('default_syntax_highlighting_theme');
  }
  public set defaultSyntaxHighlightingTheme(value: number) {
    this._defaultSyntaxHighlightingTheme = value;
  }
  public resetDefaultSyntaxHighlightingTheme() {
    this._defaultSyntaxHighlightingTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSyntaxHighlightingThemeInput() {
    return this._defaultSyntaxHighlightingTheme;
  }

  // delete_inactive_projects - computed: true, optional: true, required: false
  private _deleteInactiveProjects?: boolean | cdktf.IResolvable; 
  public get deleteInactiveProjects() {
    return this.getBooleanAttribute('delete_inactive_projects');
  }
  public set deleteInactiveProjects(value: boolean | cdktf.IResolvable) {
    this._deleteInactiveProjects = value;
  }
  public resetDeleteInactiveProjects() {
    this._deleteInactiveProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInactiveProjectsInput() {
    return this._deleteInactiveProjects;
  }

  // delete_unconfirmed_users - computed: true, optional: true, required: false
  private _deleteUnconfirmedUsers?: boolean | cdktf.IResolvable; 
  public get deleteUnconfirmedUsers() {
    return this.getBooleanAttribute('delete_unconfirmed_users');
  }
  public set deleteUnconfirmedUsers(value: boolean | cdktf.IResolvable) {
    this._deleteUnconfirmedUsers = value;
  }
  public resetDeleteUnconfirmedUsers() {
    this._deleteUnconfirmedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUnconfirmedUsersInput() {
    return this._deleteUnconfirmedUsers;
  }

  // deletion_adjourned_period - computed: true, optional: true, required: false
  private _deletionAdjournedPeriod?: number; 
  public get deletionAdjournedPeriod() {
    return this.getNumberAttribute('deletion_adjourned_period');
  }
  public set deletionAdjournedPeriod(value: number) {
    this._deletionAdjournedPeriod = value;
  }
  public resetDeletionAdjournedPeriod() {
    this._deletionAdjournedPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionAdjournedPeriodInput() {
    return this._deletionAdjournedPeriod;
  }

  // diagramsnet_enabled - computed: true, optional: true, required: false
  private _diagramsnetEnabled?: boolean | cdktf.IResolvable; 
  public get diagramsnetEnabled() {
    return this.getBooleanAttribute('diagramsnet_enabled');
  }
  public set diagramsnetEnabled(value: boolean | cdktf.IResolvable) {
    this._diagramsnetEnabled = value;
  }
  public resetDiagramsnetEnabled() {
    this._diagramsnetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagramsnetEnabledInput() {
    return this._diagramsnetEnabled;
  }

  // diagramsnet_url - computed: true, optional: true, required: false
  private _diagramsnetUrl?: string; 
  public get diagramsnetUrl() {
    return this.getStringAttribute('diagramsnet_url');
  }
  public set diagramsnetUrl(value: string) {
    this._diagramsnetUrl = value;
  }
  public resetDiagramsnetUrl() {
    this._diagramsnetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagramsnetUrlInput() {
    return this._diagramsnetUrl;
  }

  // diff_max_files - computed: true, optional: true, required: false
  private _diffMaxFiles?: number; 
  public get diffMaxFiles() {
    return this.getNumberAttribute('diff_max_files');
  }
  public set diffMaxFiles(value: number) {
    this._diffMaxFiles = value;
  }
  public resetDiffMaxFiles() {
    this._diffMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffMaxFilesInput() {
    return this._diffMaxFiles;
  }

  // diff_max_lines - computed: true, optional: true, required: false
  private _diffMaxLines?: number; 
  public get diffMaxLines() {
    return this.getNumberAttribute('diff_max_lines');
  }
  public set diffMaxLines(value: number) {
    this._diffMaxLines = value;
  }
  public resetDiffMaxLines() {
    this._diffMaxLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffMaxLinesInput() {
    return this._diffMaxLines;
  }

  // diff_max_patch_bytes - computed: true, optional: true, required: false
  private _diffMaxPatchBytes?: number; 
  public get diffMaxPatchBytes() {
    return this.getNumberAttribute('diff_max_patch_bytes');
  }
  public set diffMaxPatchBytes(value: number) {
    this._diffMaxPatchBytes = value;
  }
  public resetDiffMaxPatchBytes() {
    this._diffMaxPatchBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffMaxPatchBytesInput() {
    return this._diffMaxPatchBytes;
  }

  // disable_admin_oauth_scopes - computed: true, optional: true, required: false
  private _disableAdminOauthScopes?: boolean | cdktf.IResolvable; 
  public get disableAdminOauthScopes() {
    return this.getBooleanAttribute('disable_admin_oauth_scopes');
  }
  public set disableAdminOauthScopes(value: boolean | cdktf.IResolvable) {
    this._disableAdminOauthScopes = value;
  }
  public resetDisableAdminOauthScopes() {
    this._disableAdminOauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdminOauthScopesInput() {
    return this._disableAdminOauthScopes;
  }

  // disable_feed_token - computed: true, optional: true, required: false
  private _disableFeedToken?: boolean | cdktf.IResolvable; 
  public get disableFeedToken() {
    return this.getBooleanAttribute('disable_feed_token');
  }
  public set disableFeedToken(value: boolean | cdktf.IResolvable) {
    this._disableFeedToken = value;
  }
  public resetDisableFeedToken() {
    this._disableFeedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFeedTokenInput() {
    return this._disableFeedToken;
  }

  // disable_personal_access_tokens - computed: true, optional: true, required: false
  private _disablePersonalAccessTokens?: boolean | cdktf.IResolvable; 
  public get disablePersonalAccessTokens() {
    return this.getBooleanAttribute('disable_personal_access_tokens');
  }
  public set disablePersonalAccessTokens(value: boolean | cdktf.IResolvable) {
    this._disablePersonalAccessTokens = value;
  }
  public resetDisablePersonalAccessTokens() {
    this._disablePersonalAccessTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePersonalAccessTokensInput() {
    return this._disablePersonalAccessTokens;
  }

  // disabled_oauth_sign_in_sources - computed: true, optional: true, required: false
  private _disabledOauthSignInSources?: string[]; 
  public get disabledOauthSignInSources() {
    return this.getListAttribute('disabled_oauth_sign_in_sources');
  }
  public set disabledOauthSignInSources(value: string[]) {
    this._disabledOauthSignInSources = value;
  }
  public resetDisabledOauthSignInSources() {
    this._disabledOauthSignInSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledOauthSignInSourcesInput() {
    return this._disabledOauthSignInSources;
  }

  // dns_rebinding_protection_enabled - computed: true, optional: true, required: false
  private _dnsRebindingProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get dnsRebindingProtectionEnabled() {
    return this.getBooleanAttribute('dns_rebinding_protection_enabled');
  }
  public set dnsRebindingProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._dnsRebindingProtectionEnabled = value;
  }
  public resetDnsRebindingProtectionEnabled() {
    this._dnsRebindingProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRebindingProtectionEnabledInput() {
    return this._dnsRebindingProtectionEnabled;
  }

  // domain_allowlist - computed: true, optional: true, required: false
  private _domainAllowlist?: string[]; 
  public get domainAllowlist() {
    return this.getListAttribute('domain_allowlist');
  }
  public set domainAllowlist(value: string[]) {
    this._domainAllowlist = value;
  }
  public resetDomainAllowlist() {
    this._domainAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAllowlistInput() {
    return this._domainAllowlist;
  }

  // domain_denylist - computed: true, optional: true, required: false
  private _domainDenylist?: string[]; 
  public get domainDenylist() {
    return this.getListAttribute('domain_denylist');
  }
  public set domainDenylist(value: string[]) {
    this._domainDenylist = value;
  }
  public resetDomainDenylist() {
    this._domainDenylist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainDenylistInput() {
    return this._domainDenylist;
  }

  // domain_denylist_enabled - computed: true, optional: true, required: false
  private _domainDenylistEnabled?: boolean | cdktf.IResolvable; 
  public get domainDenylistEnabled() {
    return this.getBooleanAttribute('domain_denylist_enabled');
  }
  public set domainDenylistEnabled(value: boolean | cdktf.IResolvable) {
    this._domainDenylistEnabled = value;
  }
  public resetDomainDenylistEnabled() {
    this._domainDenylistEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainDenylistEnabledInput() {
    return this._domainDenylistEnabled;
  }

  // downstream_pipeline_trigger_limit_per_project_user_sha - computed: true, optional: true, required: false
  private _downstreamPipelineTriggerLimitPerProjectUserSha?: number; 
  public get downstreamPipelineTriggerLimitPerProjectUserSha() {
    return this.getNumberAttribute('downstream_pipeline_trigger_limit_per_project_user_sha');
  }
  public set downstreamPipelineTriggerLimitPerProjectUserSha(value: number) {
    this._downstreamPipelineTriggerLimitPerProjectUserSha = value;
  }
  public resetDownstreamPipelineTriggerLimitPerProjectUserSha() {
    this._downstreamPipelineTriggerLimitPerProjectUserSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamPipelineTriggerLimitPerProjectUserShaInput() {
    return this._downstreamPipelineTriggerLimitPerProjectUserSha;
  }

  // dsa_key_restriction - computed: true, optional: true, required: false
  private _dsaKeyRestriction?: number; 
  public get dsaKeyRestriction() {
    return this.getNumberAttribute('dsa_key_restriction');
  }
  public set dsaKeyRestriction(value: number) {
    this._dsaKeyRestriction = value;
  }
  public resetDsaKeyRestriction() {
    this._dsaKeyRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsaKeyRestrictionInput() {
    return this._dsaKeyRestriction;
  }

  // duo_features_enabled - computed: true, optional: true, required: false
  private _duoFeaturesEnabled?: boolean | cdktf.IResolvable; 
  public get duoFeaturesEnabled() {
    return this.getBooleanAttribute('duo_features_enabled');
  }
  public set duoFeaturesEnabled(value: boolean | cdktf.IResolvable) {
    this._duoFeaturesEnabled = value;
  }
  public resetDuoFeaturesEnabled() {
    this._duoFeaturesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoFeaturesEnabledInput() {
    return this._duoFeaturesEnabled;
  }

  // ecdsa_key_restriction - computed: true, optional: true, required: false
  private _ecdsaKeyRestriction?: number; 
  public get ecdsaKeyRestriction() {
    return this.getNumberAttribute('ecdsa_key_restriction');
  }
  public set ecdsaKeyRestriction(value: number) {
    this._ecdsaKeyRestriction = value;
  }
  public resetEcdsaKeyRestriction() {
    this._ecdsaKeyRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaKeyRestrictionInput() {
    return this._ecdsaKeyRestriction;
  }

  // ecdsa_sk_key_restriction - computed: true, optional: true, required: false
  private _ecdsaSkKeyRestriction?: number; 
  public get ecdsaSkKeyRestriction() {
    return this.getNumberAttribute('ecdsa_sk_key_restriction');
  }
  public set ecdsaSkKeyRestriction(value: number) {
    this._ecdsaSkKeyRestriction = value;
  }
  public resetEcdsaSkKeyRestriction() {
    this._ecdsaSkKeyRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaSkKeyRestrictionInput() {
    return this._ecdsaSkKeyRestriction;
  }

  // ed25519_key_restriction - computed: true, optional: true, required: false
  private _ed25519KeyRestriction?: number; 
  public get ed25519KeyRestriction() {
    return this.getNumberAttribute('ed25519_key_restriction');
  }
  public set ed25519KeyRestriction(value: number) {
    this._ed25519KeyRestriction = value;
  }
  public resetEd25519KeyRestriction() {
    this._ed25519KeyRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ed25519KeyRestrictionInput() {
    return this._ed25519KeyRestriction;
  }

  // ed25519_sk_key_restriction - computed: true, optional: true, required: false
  private _ed25519SkKeyRestriction?: number; 
  public get ed25519SkKeyRestriction() {
    return this.getNumberAttribute('ed25519_sk_key_restriction');
  }
  public set ed25519SkKeyRestriction(value: number) {
    this._ed25519SkKeyRestriction = value;
  }
  public resetEd25519SkKeyRestriction() {
    this._ed25519SkKeyRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ed25519SkKeyRestrictionInput() {
    return this._ed25519SkKeyRestriction;
  }

  // eks_access_key_id - computed: true, optional: true, required: false
  private _eksAccessKeyId?: string; 
  public get eksAccessKeyId() {
    return this.getStringAttribute('eks_access_key_id');
  }
  public set eksAccessKeyId(value: string) {
    this._eksAccessKeyId = value;
  }
  public resetEksAccessKeyId() {
    this._eksAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksAccessKeyIdInput() {
    return this._eksAccessKeyId;
  }

  // eks_account_id - computed: true, optional: true, required: false
  private _eksAccountId?: string; 
  public get eksAccountId() {
    return this.getStringAttribute('eks_account_id');
  }
  public set eksAccountId(value: string) {
    this._eksAccountId = value;
  }
  public resetEksAccountId() {
    this._eksAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksAccountIdInput() {
    return this._eksAccountId;
  }

  // eks_integration_enabled - computed: true, optional: true, required: false
  private _eksIntegrationEnabled?: boolean | cdktf.IResolvable; 
  public get eksIntegrationEnabled() {
    return this.getBooleanAttribute('eks_integration_enabled');
  }
  public set eksIntegrationEnabled(value: boolean | cdktf.IResolvable) {
    this._eksIntegrationEnabled = value;
  }
  public resetEksIntegrationEnabled() {
    this._eksIntegrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksIntegrationEnabledInput() {
    return this._eksIntegrationEnabled;
  }

  // eks_secret_access_key - computed: true, optional: true, required: false
  private _eksSecretAccessKey?: string; 
  public get eksSecretAccessKey() {
    return this.getStringAttribute('eks_secret_access_key');
  }
  public set eksSecretAccessKey(value: string) {
    this._eksSecretAccessKey = value;
  }
  public resetEksSecretAccessKey() {
    this._eksSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksSecretAccessKeyInput() {
    return this._eksSecretAccessKey;
  }

  // elasticsearch_aws - computed: true, optional: true, required: false
  private _elasticsearchAws?: boolean | cdktf.IResolvable; 
  public get elasticsearchAws() {
    return this.getBooleanAttribute('elasticsearch_aws');
  }
  public set elasticsearchAws(value: boolean | cdktf.IResolvable) {
    this._elasticsearchAws = value;
  }
  public resetElasticsearchAws() {
    this._elasticsearchAws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchAwsInput() {
    return this._elasticsearchAws;
  }

  // elasticsearch_aws_access_key - computed: true, optional: true, required: false
  private _elasticsearchAwsAccessKey?: string; 
  public get elasticsearchAwsAccessKey() {
    return this.getStringAttribute('elasticsearch_aws_access_key');
  }
  public set elasticsearchAwsAccessKey(value: string) {
    this._elasticsearchAwsAccessKey = value;
  }
  public resetElasticsearchAwsAccessKey() {
    this._elasticsearchAwsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchAwsAccessKeyInput() {
    return this._elasticsearchAwsAccessKey;
  }

  // elasticsearch_aws_region - computed: true, optional: true, required: false
  private _elasticsearchAwsRegion?: string; 
  public get elasticsearchAwsRegion() {
    return this.getStringAttribute('elasticsearch_aws_region');
  }
  public set elasticsearchAwsRegion(value: string) {
    this._elasticsearchAwsRegion = value;
  }
  public resetElasticsearchAwsRegion() {
    this._elasticsearchAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchAwsRegionInput() {
    return this._elasticsearchAwsRegion;
  }

  // elasticsearch_aws_secret_access_key - computed: true, optional: true, required: false
  private _elasticsearchAwsSecretAccessKey?: string; 
  public get elasticsearchAwsSecretAccessKey() {
    return this.getStringAttribute('elasticsearch_aws_secret_access_key');
  }
  public set elasticsearchAwsSecretAccessKey(value: string) {
    this._elasticsearchAwsSecretAccessKey = value;
  }
  public resetElasticsearchAwsSecretAccessKey() {
    this._elasticsearchAwsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchAwsSecretAccessKeyInput() {
    return this._elasticsearchAwsSecretAccessKey;
  }

  // elasticsearch_indexed_field_length_limit - computed: true, optional: true, required: false
  private _elasticsearchIndexedFieldLengthLimit?: number; 
  public get elasticsearchIndexedFieldLengthLimit() {
    return this.getNumberAttribute('elasticsearch_indexed_field_length_limit');
  }
  public set elasticsearchIndexedFieldLengthLimit(value: number) {
    this._elasticsearchIndexedFieldLengthLimit = value;
  }
  public resetElasticsearchIndexedFieldLengthLimit() {
    this._elasticsearchIndexedFieldLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchIndexedFieldLengthLimitInput() {
    return this._elasticsearchIndexedFieldLengthLimit;
  }

  // elasticsearch_indexed_file_size_limit_kb - computed: true, optional: true, required: false
  private _elasticsearchIndexedFileSizeLimitKb?: number; 
  public get elasticsearchIndexedFileSizeLimitKb() {
    return this.getNumberAttribute('elasticsearch_indexed_file_size_limit_kb');
  }
  public set elasticsearchIndexedFileSizeLimitKb(value: number) {
    this._elasticsearchIndexedFileSizeLimitKb = value;
  }
  public resetElasticsearchIndexedFileSizeLimitKb() {
    this._elasticsearchIndexedFileSizeLimitKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchIndexedFileSizeLimitKbInput() {
    return this._elasticsearchIndexedFileSizeLimitKb;
  }

  // elasticsearch_indexing - computed: true, optional: true, required: false
  private _elasticsearchIndexing?: boolean | cdktf.IResolvable; 
  public get elasticsearchIndexing() {
    return this.getBooleanAttribute('elasticsearch_indexing');
  }
  public set elasticsearchIndexing(value: boolean | cdktf.IResolvable) {
    this._elasticsearchIndexing = value;
  }
  public resetElasticsearchIndexing() {
    this._elasticsearchIndexing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchIndexingInput() {
    return this._elasticsearchIndexing;
  }

  // elasticsearch_limit_indexing - computed: true, optional: true, required: false
  private _elasticsearchLimitIndexing?: boolean | cdktf.IResolvable; 
  public get elasticsearchLimitIndexing() {
    return this.getBooleanAttribute('elasticsearch_limit_indexing');
  }
  public set elasticsearchLimitIndexing(value: boolean | cdktf.IResolvable) {
    this._elasticsearchLimitIndexing = value;
  }
  public resetElasticsearchLimitIndexing() {
    this._elasticsearchLimitIndexing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchLimitIndexingInput() {
    return this._elasticsearchLimitIndexing;
  }

  // elasticsearch_max_bulk_concurrency - computed: true, optional: true, required: false
  private _elasticsearchMaxBulkConcurrency?: number; 
  public get elasticsearchMaxBulkConcurrency() {
    return this.getNumberAttribute('elasticsearch_max_bulk_concurrency');
  }
  public set elasticsearchMaxBulkConcurrency(value: number) {
    this._elasticsearchMaxBulkConcurrency = value;
  }
  public resetElasticsearchMaxBulkConcurrency() {
    this._elasticsearchMaxBulkConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchMaxBulkConcurrencyInput() {
    return this._elasticsearchMaxBulkConcurrency;
  }

  // elasticsearch_max_bulk_size_mb - computed: true, optional: true, required: false
  private _elasticsearchMaxBulkSizeMb?: number; 
  public get elasticsearchMaxBulkSizeMb() {
    return this.getNumberAttribute('elasticsearch_max_bulk_size_mb');
  }
  public set elasticsearchMaxBulkSizeMb(value: number) {
    this._elasticsearchMaxBulkSizeMb = value;
  }
  public resetElasticsearchMaxBulkSizeMb() {
    this._elasticsearchMaxBulkSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchMaxBulkSizeMbInput() {
    return this._elasticsearchMaxBulkSizeMb;
  }

  // elasticsearch_max_code_indexing_concurrency - computed: true, optional: true, required: false
  private _elasticsearchMaxCodeIndexingConcurrency?: number; 
  public get elasticsearchMaxCodeIndexingConcurrency() {
    return this.getNumberAttribute('elasticsearch_max_code_indexing_concurrency');
  }
  public set elasticsearchMaxCodeIndexingConcurrency(value: number) {
    this._elasticsearchMaxCodeIndexingConcurrency = value;
  }
  public resetElasticsearchMaxCodeIndexingConcurrency() {
    this._elasticsearchMaxCodeIndexingConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchMaxCodeIndexingConcurrencyInput() {
    return this._elasticsearchMaxCodeIndexingConcurrency;
  }

  // elasticsearch_namespace_ids - computed: true, optional: true, required: false
  private _elasticsearchNamespaceIds?: number[]; 
  public get elasticsearchNamespaceIds() {
    return this.getNumberListAttribute('elasticsearch_namespace_ids');
  }
  public set elasticsearchNamespaceIds(value: number[]) {
    this._elasticsearchNamespaceIds = value;
  }
  public resetElasticsearchNamespaceIds() {
    this._elasticsearchNamespaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchNamespaceIdsInput() {
    return this._elasticsearchNamespaceIds;
  }

  // elasticsearch_password - computed: true, optional: true, required: false
  private _elasticsearchPassword?: string; 
  public get elasticsearchPassword() {
    return this.getStringAttribute('elasticsearch_password');
  }
  public set elasticsearchPassword(value: string) {
    this._elasticsearchPassword = value;
  }
  public resetElasticsearchPassword() {
    this._elasticsearchPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchPasswordInput() {
    return this._elasticsearchPassword;
  }

  // elasticsearch_project_ids - computed: true, optional: true, required: false
  private _elasticsearchProjectIds?: number[]; 
  public get elasticsearchProjectIds() {
    return this.getNumberListAttribute('elasticsearch_project_ids');
  }
  public set elasticsearchProjectIds(value: number[]) {
    this._elasticsearchProjectIds = value;
  }
  public resetElasticsearchProjectIds() {
    this._elasticsearchProjectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchProjectIdsInput() {
    return this._elasticsearchProjectIds;
  }

  // elasticsearch_requeue_workers - computed: true, optional: true, required: false
  private _elasticsearchRequeueWorkers?: boolean | cdktf.IResolvable; 
  public get elasticsearchRequeueWorkers() {
    return this.getBooleanAttribute('elasticsearch_requeue_workers');
  }
  public set elasticsearchRequeueWorkers(value: boolean | cdktf.IResolvable) {
    this._elasticsearchRequeueWorkers = value;
  }
  public resetElasticsearchRequeueWorkers() {
    this._elasticsearchRequeueWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchRequeueWorkersInput() {
    return this._elasticsearchRequeueWorkers;
  }

  // elasticsearch_search - computed: true, optional: true, required: false
  private _elasticsearchSearch?: boolean | cdktf.IResolvable; 
  public get elasticsearchSearch() {
    return this.getBooleanAttribute('elasticsearch_search');
  }
  public set elasticsearchSearch(value: boolean | cdktf.IResolvable) {
    this._elasticsearchSearch = value;
  }
  public resetElasticsearchSearch() {
    this._elasticsearchSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchSearchInput() {
    return this._elasticsearchSearch;
  }

  // elasticsearch_url - computed: true, optional: true, required: false
  private _elasticsearchUrl?: string[]; 
  public get elasticsearchUrl() {
    return this.getListAttribute('elasticsearch_url');
  }
  public set elasticsearchUrl(value: string[]) {
    this._elasticsearchUrl = value;
  }
  public resetElasticsearchUrl() {
    this._elasticsearchUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchUrlInput() {
    return this._elasticsearchUrl;
  }

  // elasticsearch_username - computed: true, optional: true, required: false
  private _elasticsearchUsername?: string; 
  public get elasticsearchUsername() {
    return this.getStringAttribute('elasticsearch_username');
  }
  public set elasticsearchUsername(value: string) {
    this._elasticsearchUsername = value;
  }
  public resetElasticsearchUsername() {
    this._elasticsearchUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchUsernameInput() {
    return this._elasticsearchUsername;
  }

  // elasticsearch_worker_number_of_shards - computed: true, optional: true, required: false
  private _elasticsearchWorkerNumberOfShards?: number; 
  public get elasticsearchWorkerNumberOfShards() {
    return this.getNumberAttribute('elasticsearch_worker_number_of_shards');
  }
  public set elasticsearchWorkerNumberOfShards(value: number) {
    this._elasticsearchWorkerNumberOfShards = value;
  }
  public resetElasticsearchWorkerNumberOfShards() {
    this._elasticsearchWorkerNumberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchWorkerNumberOfShardsInput() {
    return this._elasticsearchWorkerNumberOfShards;
  }

  // email_additional_text - computed: true, optional: true, required: false
  private _emailAdditionalText?: string; 
  public get emailAdditionalText() {
    return this.getStringAttribute('email_additional_text');
  }
  public set emailAdditionalText(value: string) {
    this._emailAdditionalText = value;
  }
  public resetEmailAdditionalText() {
    this._emailAdditionalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAdditionalTextInput() {
    return this._emailAdditionalText;
  }

  // email_author_in_body - computed: true, optional: true, required: false
  private _emailAuthorInBody?: boolean | cdktf.IResolvable; 
  public get emailAuthorInBody() {
    return this.getBooleanAttribute('email_author_in_body');
  }
  public set emailAuthorInBody(value: boolean | cdktf.IResolvable) {
    this._emailAuthorInBody = value;
  }
  public resetEmailAuthorInBody() {
    this._emailAuthorInBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAuthorInBodyInput() {
    return this._emailAuthorInBody;
  }

  // email_confirmation_setting - computed: true, optional: true, required: false
  private _emailConfirmationSetting?: string; 
  public get emailConfirmationSetting() {
    return this.getStringAttribute('email_confirmation_setting');
  }
  public set emailConfirmationSetting(value: string) {
    this._emailConfirmationSetting = value;
  }
  public resetEmailConfirmationSetting() {
    this._emailConfirmationSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfirmationSettingInput() {
    return this._emailConfirmationSetting;
  }

  // enable_artifact_external_redirect_warning_page - computed: true, optional: true, required: false
  private _enableArtifactExternalRedirectWarningPage?: boolean | cdktf.IResolvable; 
  public get enableArtifactExternalRedirectWarningPage() {
    return this.getBooleanAttribute('enable_artifact_external_redirect_warning_page');
  }
  public set enableArtifactExternalRedirectWarningPage(value: boolean | cdktf.IResolvable) {
    this._enableArtifactExternalRedirectWarningPage = value;
  }
  public resetEnableArtifactExternalRedirectWarningPage() {
    this._enableArtifactExternalRedirectWarningPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableArtifactExternalRedirectWarningPageInput() {
    return this._enableArtifactExternalRedirectWarningPage;
  }

  // enabled_git_access_protocol - computed: true, optional: true, required: false
  private _enabledGitAccessProtocol?: string; 
  public get enabledGitAccessProtocol() {
    return this.getStringAttribute('enabled_git_access_protocol');
  }
  public set enabledGitAccessProtocol(value: string) {
    this._enabledGitAccessProtocol = value;
  }
  public resetEnabledGitAccessProtocol() {
    this._enabledGitAccessProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledGitAccessProtocolInput() {
    return this._enabledGitAccessProtocol;
  }

  // enforce_namespace_storage_limit - computed: true, optional: true, required: false
  private _enforceNamespaceStorageLimit?: boolean | cdktf.IResolvable; 
  public get enforceNamespaceStorageLimit() {
    return this.getBooleanAttribute('enforce_namespace_storage_limit');
  }
  public set enforceNamespaceStorageLimit(value: boolean | cdktf.IResolvable) {
    this._enforceNamespaceStorageLimit = value;
  }
  public resetEnforceNamespaceStorageLimit() {
    this._enforceNamespaceStorageLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceNamespaceStorageLimitInput() {
    return this._enforceNamespaceStorageLimit;
  }

  // enforce_terms - computed: true, optional: true, required: false
  private _enforceTerms?: boolean | cdktf.IResolvable; 
  public get enforceTerms() {
    return this.getBooleanAttribute('enforce_terms');
  }
  public set enforceTerms(value: boolean | cdktf.IResolvable) {
    this._enforceTerms = value;
  }
  public resetEnforceTerms() {
    this._enforceTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTermsInput() {
    return this._enforceTerms;
  }

  // external_auth_client_cert - computed: true, optional: true, required: false
  private _externalAuthClientCert?: string; 
  public get externalAuthClientCert() {
    return this.getStringAttribute('external_auth_client_cert');
  }
  public set externalAuthClientCert(value: string) {
    this._externalAuthClientCert = value;
  }
  public resetExternalAuthClientCert() {
    this._externalAuthClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthClientCertInput() {
    return this._externalAuthClientCert;
  }

  // external_auth_client_key - computed: true, optional: true, required: false
  private _externalAuthClientKey?: string; 
  public get externalAuthClientKey() {
    return this.getStringAttribute('external_auth_client_key');
  }
  public set externalAuthClientKey(value: string) {
    this._externalAuthClientKey = value;
  }
  public resetExternalAuthClientKey() {
    this._externalAuthClientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthClientKeyInput() {
    return this._externalAuthClientKey;
  }

  // external_auth_client_key_pass - computed: true, optional: true, required: false
  private _externalAuthClientKeyPass?: string; 
  public get externalAuthClientKeyPass() {
    return this.getStringAttribute('external_auth_client_key_pass');
  }
  public set externalAuthClientKeyPass(value: string) {
    this._externalAuthClientKeyPass = value;
  }
  public resetExternalAuthClientKeyPass() {
    this._externalAuthClientKeyPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthClientKeyPassInput() {
    return this._externalAuthClientKeyPass;
  }

  // external_authorization_service_default_label - computed: true, optional: true, required: false
  private _externalAuthorizationServiceDefaultLabel?: string; 
  public get externalAuthorizationServiceDefaultLabel() {
    return this.getStringAttribute('external_authorization_service_default_label');
  }
  public set externalAuthorizationServiceDefaultLabel(value: string) {
    this._externalAuthorizationServiceDefaultLabel = value;
  }
  public resetExternalAuthorizationServiceDefaultLabel() {
    this._externalAuthorizationServiceDefaultLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthorizationServiceDefaultLabelInput() {
    return this._externalAuthorizationServiceDefaultLabel;
  }

  // external_authorization_service_enabled - computed: true, optional: true, required: false
  private _externalAuthorizationServiceEnabled?: boolean | cdktf.IResolvable; 
  public get externalAuthorizationServiceEnabled() {
    return this.getBooleanAttribute('external_authorization_service_enabled');
  }
  public set externalAuthorizationServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._externalAuthorizationServiceEnabled = value;
  }
  public resetExternalAuthorizationServiceEnabled() {
    this._externalAuthorizationServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthorizationServiceEnabledInput() {
    return this._externalAuthorizationServiceEnabled;
  }

  // external_authorization_service_timeout - computed: true, optional: true, required: false
  private _externalAuthorizationServiceTimeout?: number; 
  public get externalAuthorizationServiceTimeout() {
    return this.getNumberAttribute('external_authorization_service_timeout');
  }
  public set externalAuthorizationServiceTimeout(value: number) {
    this._externalAuthorizationServiceTimeout = value;
  }
  public resetExternalAuthorizationServiceTimeout() {
    this._externalAuthorizationServiceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthorizationServiceTimeoutInput() {
    return this._externalAuthorizationServiceTimeout;
  }

  // external_authorization_service_url - computed: true, optional: true, required: false
  private _externalAuthorizationServiceUrl?: string; 
  public get externalAuthorizationServiceUrl() {
    return this.getStringAttribute('external_authorization_service_url');
  }
  public set externalAuthorizationServiceUrl(value: string) {
    this._externalAuthorizationServiceUrl = value;
  }
  public resetExternalAuthorizationServiceUrl() {
    this._externalAuthorizationServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthorizationServiceUrlInput() {
    return this._externalAuthorizationServiceUrl;
  }

  // external_pipeline_validation_service_timeout - computed: true, optional: true, required: false
  private _externalPipelineValidationServiceTimeout?: number; 
  public get externalPipelineValidationServiceTimeout() {
    return this.getNumberAttribute('external_pipeline_validation_service_timeout');
  }
  public set externalPipelineValidationServiceTimeout(value: number) {
    this._externalPipelineValidationServiceTimeout = value;
  }
  public resetExternalPipelineValidationServiceTimeout() {
    this._externalPipelineValidationServiceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPipelineValidationServiceTimeoutInput() {
    return this._externalPipelineValidationServiceTimeout;
  }

  // external_pipeline_validation_service_token - computed: true, optional: true, required: false
  private _externalPipelineValidationServiceToken?: string; 
  public get externalPipelineValidationServiceToken() {
    return this.getStringAttribute('external_pipeline_validation_service_token');
  }
  public set externalPipelineValidationServiceToken(value: string) {
    this._externalPipelineValidationServiceToken = value;
  }
  public resetExternalPipelineValidationServiceToken() {
    this._externalPipelineValidationServiceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPipelineValidationServiceTokenInput() {
    return this._externalPipelineValidationServiceToken;
  }

  // external_pipeline_validation_service_url - computed: true, optional: true, required: false
  private _externalPipelineValidationServiceUrl?: string; 
  public get externalPipelineValidationServiceUrl() {
    return this.getStringAttribute('external_pipeline_validation_service_url');
  }
  public set externalPipelineValidationServiceUrl(value: string) {
    this._externalPipelineValidationServiceUrl = value;
  }
  public resetExternalPipelineValidationServiceUrl() {
    this._externalPipelineValidationServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPipelineValidationServiceUrlInput() {
    return this._externalPipelineValidationServiceUrl;
  }

  // failed_login_attempts_unlock_period_in_minutes - computed: true, optional: true, required: false
  private _failedLoginAttemptsUnlockPeriodInMinutes?: number; 
  public get failedLoginAttemptsUnlockPeriodInMinutes() {
    return this.getNumberAttribute('failed_login_attempts_unlock_period_in_minutes');
  }
  public set failedLoginAttemptsUnlockPeriodInMinutes(value: number) {
    this._failedLoginAttemptsUnlockPeriodInMinutes = value;
  }
  public resetFailedLoginAttemptsUnlockPeriodInMinutes() {
    this._failedLoginAttemptsUnlockPeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLoginAttemptsUnlockPeriodInMinutesInput() {
    return this._failedLoginAttemptsUnlockPeriodInMinutes;
  }

  // file_template_project_id - computed: true, optional: true, required: false
  private _fileTemplateProjectId?: number; 
  public get fileTemplateProjectId() {
    return this.getNumberAttribute('file_template_project_id');
  }
  public set fileTemplateProjectId(value: number) {
    this._fileTemplateProjectId = value;
  }
  public resetFileTemplateProjectId() {
    this._fileTemplateProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTemplateProjectIdInput() {
    return this._fileTemplateProjectId;
  }

  // first_day_of_week - computed: true, optional: true, required: false
  private _firstDayOfWeek?: number; 
  public get firstDayOfWeek() {
    return this.getNumberAttribute('first_day_of_week');
  }
  public set firstDayOfWeek(value: number) {
    this._firstDayOfWeek = value;
  }
  public resetFirstDayOfWeek() {
    this._firstDayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstDayOfWeekInput() {
    return this._firstDayOfWeek;
  }

  // geo_node_allowed_ips - computed: true, optional: true, required: false
  private _geoNodeAllowedIps?: string; 
  public get geoNodeAllowedIps() {
    return this.getStringAttribute('geo_node_allowed_ips');
  }
  public set geoNodeAllowedIps(value: string) {
    this._geoNodeAllowedIps = value;
  }
  public resetGeoNodeAllowedIps() {
    this._geoNodeAllowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoNodeAllowedIpsInput() {
    return this._geoNodeAllowedIps;
  }

  // geo_status_timeout - computed: true, optional: true, required: false
  private _geoStatusTimeout?: number; 
  public get geoStatusTimeout() {
    return this.getNumberAttribute('geo_status_timeout');
  }
  public set geoStatusTimeout(value: number) {
    this._geoStatusTimeout = value;
  }
  public resetGeoStatusTimeout() {
    this._geoStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoStatusTimeoutInput() {
    return this._geoStatusTimeout;
  }

  // git_rate_limit_users_alertlist - computed: true, optional: true, required: false
  private _gitRateLimitUsersAlertlist?: number[]; 
  public get gitRateLimitUsersAlertlist() {
    return this.getNumberListAttribute('git_rate_limit_users_alertlist');
  }
  public set gitRateLimitUsersAlertlist(value: number[]) {
    this._gitRateLimitUsersAlertlist = value;
  }
  public resetGitRateLimitUsersAlertlist() {
    this._gitRateLimitUsersAlertlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRateLimitUsersAlertlistInput() {
    return this._gitRateLimitUsersAlertlist;
  }

  // git_rate_limit_users_allowlist - computed: true, optional: true, required: false
  private _gitRateLimitUsersAllowlist?: string[]; 
  public get gitRateLimitUsersAllowlist() {
    return this.getListAttribute('git_rate_limit_users_allowlist');
  }
  public set gitRateLimitUsersAllowlist(value: string[]) {
    this._gitRateLimitUsersAllowlist = value;
  }
  public resetGitRateLimitUsersAllowlist() {
    this._gitRateLimitUsersAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRateLimitUsersAllowlistInput() {
    return this._gitRateLimitUsersAllowlist;
  }

  // git_two_factor_session_expiry - computed: true, optional: true, required: false
  private _gitTwoFactorSessionExpiry?: number; 
  public get gitTwoFactorSessionExpiry() {
    return this.getNumberAttribute('git_two_factor_session_expiry');
  }
  public set gitTwoFactorSessionExpiry(value: number) {
    this._gitTwoFactorSessionExpiry = value;
  }
  public resetGitTwoFactorSessionExpiry() {
    this._gitTwoFactorSessionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitTwoFactorSessionExpiryInput() {
    return this._gitTwoFactorSessionExpiry;
  }

  // gitaly_timeout_default - computed: true, optional: true, required: false
  private _gitalyTimeoutDefault?: number; 
  public get gitalyTimeoutDefault() {
    return this.getNumberAttribute('gitaly_timeout_default');
  }
  public set gitalyTimeoutDefault(value: number) {
    this._gitalyTimeoutDefault = value;
  }
  public resetGitalyTimeoutDefault() {
    this._gitalyTimeoutDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitalyTimeoutDefaultInput() {
    return this._gitalyTimeoutDefault;
  }

  // gitaly_timeout_fast - computed: true, optional: true, required: false
  private _gitalyTimeoutFast?: number; 
  public get gitalyTimeoutFast() {
    return this.getNumberAttribute('gitaly_timeout_fast');
  }
  public set gitalyTimeoutFast(value: number) {
    this._gitalyTimeoutFast = value;
  }
  public resetGitalyTimeoutFast() {
    this._gitalyTimeoutFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitalyTimeoutFastInput() {
    return this._gitalyTimeoutFast;
  }

  // gitaly_timeout_medium - computed: true, optional: true, required: false
  private _gitalyTimeoutMedium?: number; 
  public get gitalyTimeoutMedium() {
    return this.getNumberAttribute('gitaly_timeout_medium');
  }
  public set gitalyTimeoutMedium(value: number) {
    this._gitalyTimeoutMedium = value;
  }
  public resetGitalyTimeoutMedium() {
    this._gitalyTimeoutMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitalyTimeoutMediumInput() {
    return this._gitalyTimeoutMedium;
  }

  // gitlab_dedicated_instance - computed: true, optional: false, required: false
  public get gitlabDedicatedInstance() {
    return this.getBooleanAttribute('gitlab_dedicated_instance');
  }

  // gitlab_environment_toolkit_instance - computed: true, optional: false, required: false
  public get gitlabEnvironmentToolkitInstance() {
    return this.getBooleanAttribute('gitlab_environment_toolkit_instance');
  }

  // gitlab_shell_operation_limit - computed: true, optional: true, required: false
  private _gitlabShellOperationLimit?: number; 
  public get gitlabShellOperationLimit() {
    return this.getNumberAttribute('gitlab_shell_operation_limit');
  }
  public set gitlabShellOperationLimit(value: number) {
    this._gitlabShellOperationLimit = value;
  }
  public resetGitlabShellOperationLimit() {
    this._gitlabShellOperationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabShellOperationLimitInput() {
    return this._gitlabShellOperationLimit;
  }

  // gitpod_enabled - computed: true, optional: true, required: false
  private _gitpodEnabled?: boolean | cdktf.IResolvable; 
  public get gitpodEnabled() {
    return this.getBooleanAttribute('gitpod_enabled');
  }
  public set gitpodEnabled(value: boolean | cdktf.IResolvable) {
    this._gitpodEnabled = value;
  }
  public resetGitpodEnabled() {
    this._gitpodEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitpodEnabledInput() {
    return this._gitpodEnabled;
  }

  // gitpod_url - computed: true, optional: true, required: false
  private _gitpodUrl?: string; 
  public get gitpodUrl() {
    return this.getStringAttribute('gitpod_url');
  }
  public set gitpodUrl(value: string) {
    this._gitpodUrl = value;
  }
  public resetGitpodUrl() {
    this._gitpodUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitpodUrlInput() {
    return this._gitpodUrl;
  }

  // globally_allowed_ips - computed: true, optional: true, required: false
  private _globallyAllowedIps?: string; 
  public get globallyAllowedIps() {
    return this.getStringAttribute('globally_allowed_ips');
  }
  public set globallyAllowedIps(value: string) {
    this._globallyAllowedIps = value;
  }
  public resetGloballyAllowedIps() {
    this._globallyAllowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globallyAllowedIpsInput() {
    return this._globallyAllowedIps;
  }

  // grafana_enabled - computed: true, optional: true, required: false
  private _grafanaEnabled?: boolean | cdktf.IResolvable; 
  public get grafanaEnabled() {
    return this.getBooleanAttribute('grafana_enabled');
  }
  public set grafanaEnabled(value: boolean | cdktf.IResolvable) {
    this._grafanaEnabled = value;
  }
  public resetGrafanaEnabled() {
    this._grafanaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaEnabledInput() {
    return this._grafanaEnabled;
  }

  // grafana_url - computed: true, optional: true, required: false
  private _grafanaUrl?: string; 
  public get grafanaUrl() {
    return this.getStringAttribute('grafana_url');
  }
  public set grafanaUrl(value: string) {
    this._grafanaUrl = value;
  }
  public resetGrafanaUrl() {
    this._grafanaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaUrlInput() {
    return this._grafanaUrl;
  }

  // gravatar_enabled - computed: true, optional: true, required: false
  private _gravatarEnabled?: boolean | cdktf.IResolvable; 
  public get gravatarEnabled() {
    return this.getBooleanAttribute('gravatar_enabled');
  }
  public set gravatarEnabled(value: boolean | cdktf.IResolvable) {
    this._gravatarEnabled = value;
  }
  public resetGravatarEnabled() {
    this._gravatarEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gravatarEnabledInput() {
    return this._gravatarEnabled;
  }

  // group_owners_can_manage_default_branch_protection - computed: true, optional: true, required: false
  private _groupOwnersCanManageDefaultBranchProtection?: boolean | cdktf.IResolvable; 
  public get groupOwnersCanManageDefaultBranchProtection() {
    return this.getBooleanAttribute('group_owners_can_manage_default_branch_protection');
  }
  public set groupOwnersCanManageDefaultBranchProtection(value: boolean | cdktf.IResolvable) {
    this._groupOwnersCanManageDefaultBranchProtection = value;
  }
  public resetGroupOwnersCanManageDefaultBranchProtection() {
    this._groupOwnersCanManageDefaultBranchProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupOwnersCanManageDefaultBranchProtectionInput() {
    return this._groupOwnersCanManageDefaultBranchProtection;
  }

  // help_page_hide_commercial_content - computed: true, optional: true, required: false
  private _helpPageHideCommercialContent?: boolean | cdktf.IResolvable; 
  public get helpPageHideCommercialContent() {
    return this.getBooleanAttribute('help_page_hide_commercial_content');
  }
  public set helpPageHideCommercialContent(value: boolean | cdktf.IResolvable) {
    this._helpPageHideCommercialContent = value;
  }
  public resetHelpPageHideCommercialContent() {
    this._helpPageHideCommercialContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpPageHideCommercialContentInput() {
    return this._helpPageHideCommercialContent;
  }

  // help_page_support_url - computed: true, optional: true, required: false
  private _helpPageSupportUrl?: string; 
  public get helpPageSupportUrl() {
    return this.getStringAttribute('help_page_support_url');
  }
  public set helpPageSupportUrl(value: string) {
    this._helpPageSupportUrl = value;
  }
  public resetHelpPageSupportUrl() {
    this._helpPageSupportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpPageSupportUrlInput() {
    return this._helpPageSupportUrl;
  }

  // help_page_text - computed: true, optional: true, required: false
  private _helpPageText?: string; 
  public get helpPageText() {
    return this.getStringAttribute('help_page_text');
  }
  public set helpPageText(value: string) {
    this._helpPageText = value;
  }
  public resetHelpPageText() {
    this._helpPageText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpPageTextInput() {
    return this._helpPageText;
  }

  // help_text - computed: true, optional: true, required: false
  private _helpText?: string; 
  public get helpText() {
    return this.getStringAttribute('help_text');
  }
  public set helpText(value: string) {
    this._helpText = value;
  }
  public resetHelpText() {
    this._helpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpTextInput() {
    return this._helpText;
  }

  // hide_third_party_offers - computed: true, optional: true, required: false
  private _hideThirdPartyOffers?: boolean | cdktf.IResolvable; 
  public get hideThirdPartyOffers() {
    return this.getBooleanAttribute('hide_third_party_offers');
  }
  public set hideThirdPartyOffers(value: boolean | cdktf.IResolvable) {
    this._hideThirdPartyOffers = value;
  }
  public resetHideThirdPartyOffers() {
    this._hideThirdPartyOffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideThirdPartyOffersInput() {
    return this._hideThirdPartyOffers;
  }

  // home_page_url - computed: true, optional: true, required: false
  private _homePageUrl?: string; 
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }
  public set homePageUrl(value: string) {
    this._homePageUrl = value;
  }
  public resetHomePageUrl() {
    this._homePageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePageUrlInput() {
    return this._homePageUrl;
  }

  // housekeeping_enabled - computed: true, optional: true, required: false
  private _housekeepingEnabled?: boolean | cdktf.IResolvable; 
  public get housekeepingEnabled() {
    return this.getBooleanAttribute('housekeeping_enabled');
  }
  public set housekeepingEnabled(value: boolean | cdktf.IResolvable) {
    this._housekeepingEnabled = value;
  }
  public resetHousekeepingEnabled() {
    this._housekeepingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get housekeepingEnabledInput() {
    return this._housekeepingEnabled;
  }

  // housekeeping_optimize_repository_period - computed: true, optional: true, required: false
  private _housekeepingOptimizeRepositoryPeriod?: number; 
  public get housekeepingOptimizeRepositoryPeriod() {
    return this.getNumberAttribute('housekeeping_optimize_repository_period');
  }
  public set housekeepingOptimizeRepositoryPeriod(value: number) {
    this._housekeepingOptimizeRepositoryPeriod = value;
  }
  public resetHousekeepingOptimizeRepositoryPeriod() {
    this._housekeepingOptimizeRepositoryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get housekeepingOptimizeRepositoryPeriodInput() {
    return this._housekeepingOptimizeRepositoryPeriod;
  }

  // html_emails_enabled - computed: true, optional: true, required: false
  private _htmlEmailsEnabled?: boolean | cdktf.IResolvable; 
  public get htmlEmailsEnabled() {
    return this.getBooleanAttribute('html_emails_enabled');
  }
  public set htmlEmailsEnabled(value: boolean | cdktf.IResolvable) {
    this._htmlEmailsEnabled = value;
  }
  public resetHtmlEmailsEnabled() {
    this._htmlEmailsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlEmailsEnabledInput() {
    return this._htmlEmailsEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // import_sources - computed: true, optional: true, required: false
  private _importSources?: string[]; 
  public get importSources() {
    return this.getListAttribute('import_sources');
  }
  public set importSources(value: string[]) {
    this._importSources = value;
  }
  public resetImportSources() {
    this._importSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSourcesInput() {
    return this._importSources;
  }

  // in_product_marketing_emails_enabled - computed: true, optional: true, required: false
  private _inProductMarketingEmailsEnabled?: boolean | cdktf.IResolvable; 
  public get inProductMarketingEmailsEnabled() {
    return this.getBooleanAttribute('in_product_marketing_emails_enabled');
  }
  public set inProductMarketingEmailsEnabled(value: boolean | cdktf.IResolvable) {
    this._inProductMarketingEmailsEnabled = value;
  }
  public resetInProductMarketingEmailsEnabled() {
    this._inProductMarketingEmailsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProductMarketingEmailsEnabledInput() {
    return this._inProductMarketingEmailsEnabled;
  }

  // inactive_projects_delete_after_months - computed: true, optional: true, required: false
  private _inactiveProjectsDeleteAfterMonths?: number; 
  public get inactiveProjectsDeleteAfterMonths() {
    return this.getNumberAttribute('inactive_projects_delete_after_months');
  }
  public set inactiveProjectsDeleteAfterMonths(value: number) {
    this._inactiveProjectsDeleteAfterMonths = value;
  }
  public resetInactiveProjectsDeleteAfterMonths() {
    this._inactiveProjectsDeleteAfterMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveProjectsDeleteAfterMonthsInput() {
    return this._inactiveProjectsDeleteAfterMonths;
  }

  // inactive_projects_min_size_mb - computed: true, optional: true, required: false
  private _inactiveProjectsMinSizeMb?: number; 
  public get inactiveProjectsMinSizeMb() {
    return this.getNumberAttribute('inactive_projects_min_size_mb');
  }
  public set inactiveProjectsMinSizeMb(value: number) {
    this._inactiveProjectsMinSizeMb = value;
  }
  public resetInactiveProjectsMinSizeMb() {
    this._inactiveProjectsMinSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveProjectsMinSizeMbInput() {
    return this._inactiveProjectsMinSizeMb;
  }

  // inactive_projects_send_warning_email_after_months - computed: true, optional: true, required: false
  private _inactiveProjectsSendWarningEmailAfterMonths?: number; 
  public get inactiveProjectsSendWarningEmailAfterMonths() {
    return this.getNumberAttribute('inactive_projects_send_warning_email_after_months');
  }
  public set inactiveProjectsSendWarningEmailAfterMonths(value: number) {
    this._inactiveProjectsSendWarningEmailAfterMonths = value;
  }
  public resetInactiveProjectsSendWarningEmailAfterMonths() {
    this._inactiveProjectsSendWarningEmailAfterMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveProjectsSendWarningEmailAfterMonthsInput() {
    return this._inactiveProjectsSendWarningEmailAfterMonths;
  }

  // include_optional_metrics_in_service_ping - computed: true, optional: true, required: false
  private _includeOptionalMetricsInServicePing?: boolean | cdktf.IResolvable; 
  public get includeOptionalMetricsInServicePing() {
    return this.getBooleanAttribute('include_optional_metrics_in_service_ping');
  }
  public set includeOptionalMetricsInServicePing(value: boolean | cdktf.IResolvable) {
    this._includeOptionalMetricsInServicePing = value;
  }
  public resetIncludeOptionalMetricsInServicePing() {
    this._includeOptionalMetricsInServicePing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOptionalMetricsInServicePingInput() {
    return this._includeOptionalMetricsInServicePing;
  }

  // invisible_captcha_enabled - computed: true, optional: true, required: false
  private _invisibleCaptchaEnabled?: boolean | cdktf.IResolvable; 
  public get invisibleCaptchaEnabled() {
    return this.getBooleanAttribute('invisible_captcha_enabled');
  }
  public set invisibleCaptchaEnabled(value: boolean | cdktf.IResolvable) {
    this._invisibleCaptchaEnabled = value;
  }
  public resetInvisibleCaptchaEnabled() {
    this._invisibleCaptchaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invisibleCaptchaEnabledInput() {
    return this._invisibleCaptchaEnabled;
  }

  // issues_create_limit - computed: true, optional: true, required: false
  private _issuesCreateLimit?: number; 
  public get issuesCreateLimit() {
    return this.getNumberAttribute('issues_create_limit');
  }
  public set issuesCreateLimit(value: number) {
    this._issuesCreateLimit = value;
  }
  public resetIssuesCreateLimit() {
    this._issuesCreateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesCreateLimitInput() {
    return this._issuesCreateLimit;
  }

  // jira_connect_application_key - computed: true, optional: true, required: false
  private _jiraConnectApplicationKey?: string; 
  public get jiraConnectApplicationKey() {
    return this.getStringAttribute('jira_connect_application_key');
  }
  public set jiraConnectApplicationKey(value: string) {
    this._jiraConnectApplicationKey = value;
  }
  public resetJiraConnectApplicationKey() {
    this._jiraConnectApplicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraConnectApplicationKeyInput() {
    return this._jiraConnectApplicationKey;
  }

  // jira_connect_proxy_url - computed: true, optional: true, required: false
  private _jiraConnectProxyUrl?: string; 
  public get jiraConnectProxyUrl() {
    return this.getStringAttribute('jira_connect_proxy_url');
  }
  public set jiraConnectProxyUrl(value: string) {
    this._jiraConnectProxyUrl = value;
  }
  public resetJiraConnectProxyUrl() {
    this._jiraConnectProxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraConnectProxyUrlInput() {
    return this._jiraConnectProxyUrl;
  }

  // jira_connect_public_key_storage_enabled - computed: true, optional: true, required: false
  private _jiraConnectPublicKeyStorageEnabled?: boolean | cdktf.IResolvable; 
  public get jiraConnectPublicKeyStorageEnabled() {
    return this.getBooleanAttribute('jira_connect_public_key_storage_enabled');
  }
  public set jiraConnectPublicKeyStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._jiraConnectPublicKeyStorageEnabled = value;
  }
  public resetJiraConnectPublicKeyStorageEnabled() {
    this._jiraConnectPublicKeyStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraConnectPublicKeyStorageEnabledInput() {
    return this._jiraConnectPublicKeyStorageEnabled;
  }

  // keep_latest_artifact - computed: true, optional: true, required: false
  private _keepLatestArtifact?: boolean | cdktf.IResolvable; 
  public get keepLatestArtifact() {
    return this.getBooleanAttribute('keep_latest_artifact');
  }
  public set keepLatestArtifact(value: boolean | cdktf.IResolvable) {
    this._keepLatestArtifact = value;
  }
  public resetKeepLatestArtifact() {
    this._keepLatestArtifact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLatestArtifactInput() {
    return this._keepLatestArtifact;
  }

  // local_markdown_version - computed: true, optional: true, required: false
  private _localMarkdownVersion?: number; 
  public get localMarkdownVersion() {
    return this.getNumberAttribute('local_markdown_version');
  }
  public set localMarkdownVersion(value: number) {
    this._localMarkdownVersion = value;
  }
  public resetLocalMarkdownVersion() {
    this._localMarkdownVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localMarkdownVersionInput() {
    return this._localMarkdownVersion;
  }

  // lock_duo_features_enabled - computed: true, optional: true, required: false
  private _lockDuoFeaturesEnabled?: boolean | cdktf.IResolvable; 
  public get lockDuoFeaturesEnabled() {
    return this.getBooleanAttribute('lock_duo_features_enabled');
  }
  public set lockDuoFeaturesEnabled(value: boolean | cdktf.IResolvable) {
    this._lockDuoFeaturesEnabled = value;
  }
  public resetLockDuoFeaturesEnabled() {
    this._lockDuoFeaturesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDuoFeaturesEnabledInput() {
    return this._lockDuoFeaturesEnabled;
  }

  // lock_memberships_to_ldap - computed: true, optional: true, required: false
  private _lockMembershipsToLdap?: boolean | cdktf.IResolvable; 
  public get lockMembershipsToLdap() {
    return this.getBooleanAttribute('lock_memberships_to_ldap');
  }
  public set lockMembershipsToLdap(value: boolean | cdktf.IResolvable) {
    this._lockMembershipsToLdap = value;
  }
  public resetLockMembershipsToLdap() {
    this._lockMembershipsToLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockMembershipsToLdapInput() {
    return this._lockMembershipsToLdap;
  }

  // mailgun_events_enabled - computed: true, optional: true, required: false
  private _mailgunEventsEnabled?: boolean | cdktf.IResolvable; 
  public get mailgunEventsEnabled() {
    return this.getBooleanAttribute('mailgun_events_enabled');
  }
  public set mailgunEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._mailgunEventsEnabled = value;
  }
  public resetMailgunEventsEnabled() {
    this._mailgunEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailgunEventsEnabledInput() {
    return this._mailgunEventsEnabled;
  }

  // mailgun_signing_key - computed: true, optional: true, required: false
  private _mailgunSigningKey?: string; 
  public get mailgunSigningKey() {
    return this.getStringAttribute('mailgun_signing_key');
  }
  public set mailgunSigningKey(value: string) {
    this._mailgunSigningKey = value;
  }
  public resetMailgunSigningKey() {
    this._mailgunSigningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailgunSigningKeyInput() {
    return this._mailgunSigningKey;
  }

  // maintenance_mode - computed: true, optional: true, required: false
  private _maintenanceMode?: boolean | cdktf.IResolvable; 
  public get maintenanceMode() {
    return this.getBooleanAttribute('maintenance_mode');
  }
  public set maintenanceMode(value: boolean | cdktf.IResolvable) {
    this._maintenanceMode = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode;
  }

  // maintenance_mode_message - computed: true, optional: true, required: false
  private _maintenanceModeMessage?: string; 
  public get maintenanceModeMessage() {
    return this.getStringAttribute('maintenance_mode_message');
  }
  public set maintenanceModeMessage(value: string) {
    this._maintenanceModeMessage = value;
  }
  public resetMaintenanceModeMessage() {
    this._maintenanceModeMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeMessageInput() {
    return this._maintenanceModeMessage;
  }

  // maven_package_requests_forwarding - computed: true, optional: true, required: false
  private _mavenPackageRequestsForwarding?: boolean | cdktf.IResolvable; 
  public get mavenPackageRequestsForwarding() {
    return this.getBooleanAttribute('maven_package_requests_forwarding');
  }
  public set mavenPackageRequestsForwarding(value: boolean | cdktf.IResolvable) {
    this._mavenPackageRequestsForwarding = value;
  }
  public resetMavenPackageRequestsForwarding() {
    this._mavenPackageRequestsForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenPackageRequestsForwardingInput() {
    return this._mavenPackageRequestsForwarding;
  }

  // max_artifacts_size - computed: true, optional: true, required: false
  private _maxArtifactsSize?: number; 
  public get maxArtifactsSize() {
    return this.getNumberAttribute('max_artifacts_size');
  }
  public set maxArtifactsSize(value: number) {
    this._maxArtifactsSize = value;
  }
  public resetMaxArtifactsSize() {
    this._maxArtifactsSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxArtifactsSizeInput() {
    return this._maxArtifactsSize;
  }

  // max_attachment_size - computed: true, optional: true, required: false
  private _maxAttachmentSize?: number; 
  public get maxAttachmentSize() {
    return this.getNumberAttribute('max_attachment_size');
  }
  public set maxAttachmentSize(value: number) {
    this._maxAttachmentSize = value;
  }
  public resetMaxAttachmentSize() {
    this._maxAttachmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttachmentSizeInput() {
    return this._maxAttachmentSize;
  }

  // max_decompressed_archive_size - computed: true, optional: true, required: false
  private _maxDecompressedArchiveSize?: number; 
  public get maxDecompressedArchiveSize() {
    return this.getNumberAttribute('max_decompressed_archive_size');
  }
  public set maxDecompressedArchiveSize(value: number) {
    this._maxDecompressedArchiveSize = value;
  }
  public resetMaxDecompressedArchiveSize() {
    this._maxDecompressedArchiveSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDecompressedArchiveSizeInput() {
    return this._maxDecompressedArchiveSize;
  }

  // max_export_size - computed: true, optional: true, required: false
  private _maxExportSize?: number; 
  public get maxExportSize() {
    return this.getNumberAttribute('max_export_size');
  }
  public set maxExportSize(value: number) {
    this._maxExportSize = value;
  }
  public resetMaxExportSize() {
    this._maxExportSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExportSizeInput() {
    return this._maxExportSize;
  }

  // max_import_remote_file_size - computed: true, optional: true, required: false
  private _maxImportRemoteFileSize?: number; 
  public get maxImportRemoteFileSize() {
    return this.getNumberAttribute('max_import_remote_file_size');
  }
  public set maxImportRemoteFileSize(value: number) {
    this._maxImportRemoteFileSize = value;
  }
  public resetMaxImportRemoteFileSize() {
    this._maxImportRemoteFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxImportRemoteFileSizeInput() {
    return this._maxImportRemoteFileSize;
  }

  // max_import_size - computed: true, optional: true, required: false
  private _maxImportSize?: number; 
  public get maxImportSize() {
    return this.getNumberAttribute('max_import_size');
  }
  public set maxImportSize(value: number) {
    this._maxImportSize = value;
  }
  public resetMaxImportSize() {
    this._maxImportSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxImportSizeInput() {
    return this._maxImportSize;
  }

  // max_login_attempts - computed: true, optional: true, required: false
  private _maxLoginAttempts?: number; 
  public get maxLoginAttempts() {
    return this.getNumberAttribute('max_login_attempts');
  }
  public set maxLoginAttempts(value: number) {
    this._maxLoginAttempts = value;
  }
  public resetMaxLoginAttempts() {
    this._maxLoginAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLoginAttemptsInput() {
    return this._maxLoginAttempts;
  }

  // max_number_of_repository_downloads - computed: true, optional: true, required: false
  private _maxNumberOfRepositoryDownloads?: number; 
  public get maxNumberOfRepositoryDownloads() {
    return this.getNumberAttribute('max_number_of_repository_downloads');
  }
  public set maxNumberOfRepositoryDownloads(value: number) {
    this._maxNumberOfRepositoryDownloads = value;
  }
  public resetMaxNumberOfRepositoryDownloads() {
    this._maxNumberOfRepositoryDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfRepositoryDownloadsInput() {
    return this._maxNumberOfRepositoryDownloads;
  }

  // max_number_of_repository_downloads_within_time_period - computed: true, optional: true, required: false
  private _maxNumberOfRepositoryDownloadsWithinTimePeriod?: number; 
  public get maxNumberOfRepositoryDownloadsWithinTimePeriod() {
    return this.getNumberAttribute('max_number_of_repository_downloads_within_time_period');
  }
  public set maxNumberOfRepositoryDownloadsWithinTimePeriod(value: number) {
    this._maxNumberOfRepositoryDownloadsWithinTimePeriod = value;
  }
  public resetMaxNumberOfRepositoryDownloadsWithinTimePeriod() {
    this._maxNumberOfRepositoryDownloadsWithinTimePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfRepositoryDownloadsWithinTimePeriodInput() {
    return this._maxNumberOfRepositoryDownloadsWithinTimePeriod;
  }

  // max_pages_size - computed: true, optional: true, required: false
  private _maxPagesSize?: number; 
  public get maxPagesSize() {
    return this.getNumberAttribute('max_pages_size');
  }
  public set maxPagesSize(value: number) {
    this._maxPagesSize = value;
  }
  public resetMaxPagesSize() {
    this._maxPagesSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPagesSizeInput() {
    return this._maxPagesSize;
  }

  // max_personal_access_token_lifetime - computed: true, optional: true, required: false
  private _maxPersonalAccessTokenLifetime?: number; 
  public get maxPersonalAccessTokenLifetime() {
    return this.getNumberAttribute('max_personal_access_token_lifetime');
  }
  public set maxPersonalAccessTokenLifetime(value: number) {
    this._maxPersonalAccessTokenLifetime = value;
  }
  public resetMaxPersonalAccessTokenLifetime() {
    this._maxPersonalAccessTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPersonalAccessTokenLifetimeInput() {
    return this._maxPersonalAccessTokenLifetime;
  }

  // max_ssh_key_lifetime - computed: true, optional: true, required: false
  private _maxSshKeyLifetime?: number; 
  public get maxSshKeyLifetime() {
    return this.getNumberAttribute('max_ssh_key_lifetime');
  }
  public set maxSshKeyLifetime(value: number) {
    this._maxSshKeyLifetime = value;
  }
  public resetMaxSshKeyLifetime() {
    this._maxSshKeyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSshKeyLifetimeInput() {
    return this._maxSshKeyLifetime;
  }

  // max_terraform_state_size_bytes - computed: true, optional: true, required: false
  private _maxTerraformStateSizeBytes?: number; 
  public get maxTerraformStateSizeBytes() {
    return this.getNumberAttribute('max_terraform_state_size_bytes');
  }
  public set maxTerraformStateSizeBytes(value: number) {
    this._maxTerraformStateSizeBytes = value;
  }
  public resetMaxTerraformStateSizeBytes() {
    this._maxTerraformStateSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTerraformStateSizeBytesInput() {
    return this._maxTerraformStateSizeBytes;
  }

  // metrics_method_call_threshold - computed: true, optional: true, required: false
  private _metricsMethodCallThreshold?: number; 
  public get metricsMethodCallThreshold() {
    return this.getNumberAttribute('metrics_method_call_threshold');
  }
  public set metricsMethodCallThreshold(value: number) {
    this._metricsMethodCallThreshold = value;
  }
  public resetMetricsMethodCallThreshold() {
    this._metricsMethodCallThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsMethodCallThresholdInput() {
    return this._metricsMethodCallThreshold;
  }

  // minimum_password_length - computed: true, optional: true, required: false
  private _minimumPasswordLength?: number; 
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
  public set minimumPasswordLength(value: number) {
    this._minimumPasswordLength = value;
  }
  public resetMinimumPasswordLength() {
    this._minimumPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordLengthInput() {
    return this._minimumPasswordLength;
  }

  // mirror_available - computed: true, optional: true, required: false
  private _mirrorAvailable?: boolean | cdktf.IResolvable; 
  public get mirrorAvailable() {
    return this.getBooleanAttribute('mirror_available');
  }
  public set mirrorAvailable(value: boolean | cdktf.IResolvable) {
    this._mirrorAvailable = value;
  }
  public resetMirrorAvailable() {
    this._mirrorAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorAvailableInput() {
    return this._mirrorAvailable;
  }

  // mirror_capacity_threshold - computed: true, optional: true, required: false
  private _mirrorCapacityThreshold?: number; 
  public get mirrorCapacityThreshold() {
    return this.getNumberAttribute('mirror_capacity_threshold');
  }
  public set mirrorCapacityThreshold(value: number) {
    this._mirrorCapacityThreshold = value;
  }
  public resetMirrorCapacityThreshold() {
    this._mirrorCapacityThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorCapacityThresholdInput() {
    return this._mirrorCapacityThreshold;
  }

  // mirror_max_capacity - computed: true, optional: true, required: false
  private _mirrorMaxCapacity?: number; 
  public get mirrorMaxCapacity() {
    return this.getNumberAttribute('mirror_max_capacity');
  }
  public set mirrorMaxCapacity(value: number) {
    this._mirrorMaxCapacity = value;
  }
  public resetMirrorMaxCapacity() {
    this._mirrorMaxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMaxCapacityInput() {
    return this._mirrorMaxCapacity;
  }

  // mirror_max_delay - computed: true, optional: true, required: false
  private _mirrorMaxDelay?: number; 
  public get mirrorMaxDelay() {
    return this.getNumberAttribute('mirror_max_delay');
  }
  public set mirrorMaxDelay(value: number) {
    this._mirrorMaxDelay = value;
  }
  public resetMirrorMaxDelay() {
    this._mirrorMaxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorMaxDelayInput() {
    return this._mirrorMaxDelay;
  }

  // npm_package_requests_forwarding - computed: true, optional: true, required: false
  private _npmPackageRequestsForwarding?: boolean | cdktf.IResolvable; 
  public get npmPackageRequestsForwarding() {
    return this.getBooleanAttribute('npm_package_requests_forwarding');
  }
  public set npmPackageRequestsForwarding(value: boolean | cdktf.IResolvable) {
    this._npmPackageRequestsForwarding = value;
  }
  public resetNpmPackageRequestsForwarding() {
    this._npmPackageRequestsForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npmPackageRequestsForwardingInput() {
    return this._npmPackageRequestsForwarding;
  }

  // nuget_skip_metadata_url_validation - computed: true, optional: true, required: false
  private _nugetSkipMetadataUrlValidation?: boolean | cdktf.IResolvable; 
  public get nugetSkipMetadataUrlValidation() {
    return this.getBooleanAttribute('nuget_skip_metadata_url_validation');
  }
  public set nugetSkipMetadataUrlValidation(value: boolean | cdktf.IResolvable) {
    this._nugetSkipMetadataUrlValidation = value;
  }
  public resetNugetSkipMetadataUrlValidation() {
    this._nugetSkipMetadataUrlValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nugetSkipMetadataUrlValidationInput() {
    return this._nugetSkipMetadataUrlValidation;
  }

  // outbound_local_requests_whitelist - computed: true, optional: true, required: false
  private _outboundLocalRequestsWhitelist?: string[]; 
  public get outboundLocalRequestsWhitelist() {
    return this.getListAttribute('outbound_local_requests_whitelist');
  }
  public set outboundLocalRequestsWhitelist(value: string[]) {
    this._outboundLocalRequestsWhitelist = value;
  }
  public resetOutboundLocalRequestsWhitelist() {
    this._outboundLocalRequestsWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundLocalRequestsWhitelistInput() {
    return this._outboundLocalRequestsWhitelist;
  }

  // package_metadata_purl_types - computed: true, optional: true, required: false
  private _packageMetadataPurlTypes?: number[]; 
  public get packageMetadataPurlTypes() {
    return this.getNumberListAttribute('package_metadata_purl_types');
  }
  public set packageMetadataPurlTypes(value: number[]) {
    this._packageMetadataPurlTypes = value;
  }
  public resetPackageMetadataPurlTypes() {
    this._packageMetadataPurlTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageMetadataPurlTypesInput() {
    return this._packageMetadataPurlTypes;
  }

  // package_registry_allow_anyone_to_pull_option - computed: true, optional: true, required: false
  private _packageRegistryAllowAnyoneToPullOption?: boolean | cdktf.IResolvable; 
  public get packageRegistryAllowAnyoneToPullOption() {
    return this.getBooleanAttribute('package_registry_allow_anyone_to_pull_option');
  }
  public set packageRegistryAllowAnyoneToPullOption(value: boolean | cdktf.IResolvable) {
    this._packageRegistryAllowAnyoneToPullOption = value;
  }
  public resetPackageRegistryAllowAnyoneToPullOption() {
    this._packageRegistryAllowAnyoneToPullOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRegistryAllowAnyoneToPullOptionInput() {
    return this._packageRegistryAllowAnyoneToPullOption;
  }

  // package_registry_cleanup_policies_worker_capacity - computed: true, optional: true, required: false
  private _packageRegistryCleanupPoliciesWorkerCapacity?: number; 
  public get packageRegistryCleanupPoliciesWorkerCapacity() {
    return this.getNumberAttribute('package_registry_cleanup_policies_worker_capacity');
  }
  public set packageRegistryCleanupPoliciesWorkerCapacity(value: number) {
    this._packageRegistryCleanupPoliciesWorkerCapacity = value;
  }
  public resetPackageRegistryCleanupPoliciesWorkerCapacity() {
    this._packageRegistryCleanupPoliciesWorkerCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRegistryCleanupPoliciesWorkerCapacityInput() {
    return this._packageRegistryCleanupPoliciesWorkerCapacity;
  }

  // pages_domain_verification_enabled - computed: true, optional: true, required: false
  private _pagesDomainVerificationEnabled?: boolean | cdktf.IResolvable; 
  public get pagesDomainVerificationEnabled() {
    return this.getBooleanAttribute('pages_domain_verification_enabled');
  }
  public set pagesDomainVerificationEnabled(value: boolean | cdktf.IResolvable) {
    this._pagesDomainVerificationEnabled = value;
  }
  public resetPagesDomainVerificationEnabled() {
    this._pagesDomainVerificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagesDomainVerificationEnabledInput() {
    return this._pagesDomainVerificationEnabled;
  }

  // password_authentication_enabled_for_git - computed: true, optional: true, required: false
  private _passwordAuthenticationEnabledForGit?: boolean | cdktf.IResolvable; 
  public get passwordAuthenticationEnabledForGit() {
    return this.getBooleanAttribute('password_authentication_enabled_for_git');
  }
  public set passwordAuthenticationEnabledForGit(value: boolean | cdktf.IResolvable) {
    this._passwordAuthenticationEnabledForGit = value;
  }
  public resetPasswordAuthenticationEnabledForGit() {
    this._passwordAuthenticationEnabledForGit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationEnabledForGitInput() {
    return this._passwordAuthenticationEnabledForGit;
  }

  // password_authentication_enabled_for_web - computed: true, optional: true, required: false
  private _passwordAuthenticationEnabledForWeb?: boolean | cdktf.IResolvable; 
  public get passwordAuthenticationEnabledForWeb() {
    return this.getBooleanAttribute('password_authentication_enabled_for_web');
  }
  public set passwordAuthenticationEnabledForWeb(value: boolean | cdktf.IResolvable) {
    this._passwordAuthenticationEnabledForWeb = value;
  }
  public resetPasswordAuthenticationEnabledForWeb() {
    this._passwordAuthenticationEnabledForWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationEnabledForWebInput() {
    return this._passwordAuthenticationEnabledForWeb;
  }

  // password_lowercase_required - computed: true, optional: true, required: false
  private _passwordLowercaseRequired?: boolean | cdktf.IResolvable; 
  public get passwordLowercaseRequired() {
    return this.getBooleanAttribute('password_lowercase_required');
  }
  public set passwordLowercaseRequired(value: boolean | cdktf.IResolvable) {
    this._passwordLowercaseRequired = value;
  }
  public resetPasswordLowercaseRequired() {
    this._passwordLowercaseRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLowercaseRequiredInput() {
    return this._passwordLowercaseRequired;
  }

  // password_number_required - computed: true, optional: true, required: false
  private _passwordNumberRequired?: boolean | cdktf.IResolvable; 
  public get passwordNumberRequired() {
    return this.getBooleanAttribute('password_number_required');
  }
  public set passwordNumberRequired(value: boolean | cdktf.IResolvable) {
    this._passwordNumberRequired = value;
  }
  public resetPasswordNumberRequired() {
    this._passwordNumberRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNumberRequiredInput() {
    return this._passwordNumberRequired;
  }

  // password_symbol_required - computed: true, optional: true, required: false
  private _passwordSymbolRequired?: boolean | cdktf.IResolvable; 
  public get passwordSymbolRequired() {
    return this.getBooleanAttribute('password_symbol_required');
  }
  public set passwordSymbolRequired(value: boolean | cdktf.IResolvable) {
    this._passwordSymbolRequired = value;
  }
  public resetPasswordSymbolRequired() {
    this._passwordSymbolRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSymbolRequiredInput() {
    return this._passwordSymbolRequired;
  }

  // password_uppercase_required - computed: true, optional: true, required: false
  private _passwordUppercaseRequired?: boolean | cdktf.IResolvable; 
  public get passwordUppercaseRequired() {
    return this.getBooleanAttribute('password_uppercase_required');
  }
  public set passwordUppercaseRequired(value: boolean | cdktf.IResolvable) {
    this._passwordUppercaseRequired = value;
  }
  public resetPasswordUppercaseRequired() {
    this._passwordUppercaseRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordUppercaseRequiredInput() {
    return this._passwordUppercaseRequired;
  }

  // performance_bar_allowed_group_path - computed: true, optional: true, required: false
  private _performanceBarAllowedGroupPath?: string; 
  public get performanceBarAllowedGroupPath() {
    return this.getStringAttribute('performance_bar_allowed_group_path');
  }
  public set performanceBarAllowedGroupPath(value: string) {
    this._performanceBarAllowedGroupPath = value;
  }
  public resetPerformanceBarAllowedGroupPath() {
    this._performanceBarAllowedGroupPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceBarAllowedGroupPathInput() {
    return this._performanceBarAllowedGroupPath;
  }

  // personal_access_token_prefix - computed: true, optional: true, required: false
  private _personalAccessTokenPrefix?: string; 
  public get personalAccessTokenPrefix() {
    return this.getStringAttribute('personal_access_token_prefix');
  }
  public set personalAccessTokenPrefix(value: string) {
    this._personalAccessTokenPrefix = value;
  }
  public resetPersonalAccessTokenPrefix() {
    this._personalAccessTokenPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenPrefixInput() {
    return this._personalAccessTokenPrefix;
  }

  // pipeline_limit_per_project_user_sha - computed: true, optional: true, required: false
  private _pipelineLimitPerProjectUserSha?: number; 
  public get pipelineLimitPerProjectUserSha() {
    return this.getNumberAttribute('pipeline_limit_per_project_user_sha');
  }
  public set pipelineLimitPerProjectUserSha(value: number) {
    this._pipelineLimitPerProjectUserSha = value;
  }
  public resetPipelineLimitPerProjectUserSha() {
    this._pipelineLimitPerProjectUserSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineLimitPerProjectUserShaInput() {
    return this._pipelineLimitPerProjectUserSha;
  }

  // plantuml_enabled - computed: true, optional: true, required: false
  private _plantumlEnabled?: boolean | cdktf.IResolvable; 
  public get plantumlEnabled() {
    return this.getBooleanAttribute('plantuml_enabled');
  }
  public set plantumlEnabled(value: boolean | cdktf.IResolvable) {
    this._plantumlEnabled = value;
  }
  public resetPlantumlEnabled() {
    this._plantumlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plantumlEnabledInput() {
    return this._plantumlEnabled;
  }

  // plantuml_url - computed: true, optional: true, required: false
  private _plantumlUrl?: string; 
  public get plantumlUrl() {
    return this.getStringAttribute('plantuml_url');
  }
  public set plantumlUrl(value: string) {
    this._plantumlUrl = value;
  }
  public resetPlantumlUrl() {
    this._plantumlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plantumlUrlInput() {
    return this._plantumlUrl;
  }

  // polling_interval_multiplier - computed: true, optional: true, required: false
  private _pollingIntervalMultiplier?: number; 
  public get pollingIntervalMultiplier() {
    return this.getNumberAttribute('polling_interval_multiplier');
  }
  public set pollingIntervalMultiplier(value: number) {
    this._pollingIntervalMultiplier = value;
  }
  public resetPollingIntervalMultiplier() {
    this._pollingIntervalMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalMultiplierInput() {
    return this._pollingIntervalMultiplier;
  }

  // project_export_enabled - computed: true, optional: true, required: false
  private _projectExportEnabled?: boolean | cdktf.IResolvable; 
  public get projectExportEnabled() {
    return this.getBooleanAttribute('project_export_enabled');
  }
  public set projectExportEnabled(value: boolean | cdktf.IResolvable) {
    this._projectExportEnabled = value;
  }
  public resetProjectExportEnabled() {
    this._projectExportEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectExportEnabledInput() {
    return this._projectExportEnabled;
  }

  // project_jobs_api_rate_limit - computed: true, optional: true, required: false
  private _projectJobsApiRateLimit?: number; 
  public get projectJobsApiRateLimit() {
    return this.getNumberAttribute('project_jobs_api_rate_limit');
  }
  public set projectJobsApiRateLimit(value: number) {
    this._projectJobsApiRateLimit = value;
  }
  public resetProjectJobsApiRateLimit() {
    this._projectJobsApiRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectJobsApiRateLimitInput() {
    return this._projectJobsApiRateLimit;
  }

  // projects_api_rate_limit_unauthenticated - computed: true, optional: true, required: false
  private _projectsApiRateLimitUnauthenticated?: number; 
  public get projectsApiRateLimitUnauthenticated() {
    return this.getNumberAttribute('projects_api_rate_limit_unauthenticated');
  }
  public set projectsApiRateLimitUnauthenticated(value: number) {
    this._projectsApiRateLimitUnauthenticated = value;
  }
  public resetProjectsApiRateLimitUnauthenticated() {
    this._projectsApiRateLimitUnauthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsApiRateLimitUnauthenticatedInput() {
    return this._projectsApiRateLimitUnauthenticated;
  }

  // prometheus_metrics_enabled - computed: true, optional: true, required: false
  private _prometheusMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get prometheusMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_metrics_enabled');
  }
  public set prometheusMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._prometheusMetricsEnabled = value;
  }
  public resetPrometheusMetricsEnabled() {
    this._prometheusMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusMetricsEnabledInput() {
    return this._prometheusMetricsEnabled;
  }

  // protected_ci_variables - computed: true, optional: true, required: false
  private _protectedCiVariables?: boolean | cdktf.IResolvable; 
  public get protectedCiVariables() {
    return this.getBooleanAttribute('protected_ci_variables');
  }
  public set protectedCiVariables(value: boolean | cdktf.IResolvable) {
    this._protectedCiVariables = value;
  }
  public resetProtectedCiVariables() {
    this._protectedCiVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedCiVariablesInput() {
    return this._protectedCiVariables;
  }

  // push_event_activities_limit - computed: true, optional: true, required: false
  private _pushEventActivitiesLimit?: number; 
  public get pushEventActivitiesLimit() {
    return this.getNumberAttribute('push_event_activities_limit');
  }
  public set pushEventActivitiesLimit(value: number) {
    this._pushEventActivitiesLimit = value;
  }
  public resetPushEventActivitiesLimit() {
    this._pushEventActivitiesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEventActivitiesLimitInput() {
    return this._pushEventActivitiesLimit;
  }

  // push_event_hooks_limit - computed: true, optional: true, required: false
  private _pushEventHooksLimit?: number; 
  public get pushEventHooksLimit() {
    return this.getNumberAttribute('push_event_hooks_limit');
  }
  public set pushEventHooksLimit(value: number) {
    this._pushEventHooksLimit = value;
  }
  public resetPushEventHooksLimit() {
    this._pushEventHooksLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEventHooksLimitInput() {
    return this._pushEventHooksLimit;
  }

  // pypi_package_requests_forwarding - computed: true, optional: true, required: false
  private _pypiPackageRequestsForwarding?: boolean | cdktf.IResolvable; 
  public get pypiPackageRequestsForwarding() {
    return this.getBooleanAttribute('pypi_package_requests_forwarding');
  }
  public set pypiPackageRequestsForwarding(value: boolean | cdktf.IResolvable) {
    this._pypiPackageRequestsForwarding = value;
  }
  public resetPypiPackageRequestsForwarding() {
    this._pypiPackageRequestsForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pypiPackageRequestsForwardingInput() {
    return this._pypiPackageRequestsForwarding;
  }

  // rate_limiting_response_text - computed: true, optional: true, required: false
  private _rateLimitingResponseText?: string; 
  public get rateLimitingResponseText() {
    return this.getStringAttribute('rate_limiting_response_text');
  }
  public set rateLimitingResponseText(value: string) {
    this._rateLimitingResponseText = value;
  }
  public resetRateLimitingResponseText() {
    this._rateLimitingResponseText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingResponseTextInput() {
    return this._rateLimitingResponseText;
  }

  // raw_blob_request_limit - computed: true, optional: true, required: false
  private _rawBlobRequestLimit?: number; 
  public get rawBlobRequestLimit() {
    return this.getNumberAttribute('raw_blob_request_limit');
  }
  public set rawBlobRequestLimit(value: number) {
    this._rawBlobRequestLimit = value;
  }
  public resetRawBlobRequestLimit() {
    this._rawBlobRequestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawBlobRequestLimitInput() {
    return this._rawBlobRequestLimit;
  }

  // recaptcha_enabled - computed: true, optional: true, required: false
  private _recaptchaEnabled?: boolean | cdktf.IResolvable; 
  public get recaptchaEnabled() {
    return this.getBooleanAttribute('recaptcha_enabled');
  }
  public set recaptchaEnabled(value: boolean | cdktf.IResolvable) {
    this._recaptchaEnabled = value;
  }
  public resetRecaptchaEnabled() {
    this._recaptchaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaEnabledInput() {
    return this._recaptchaEnabled;
  }

  // recaptcha_private_key - computed: true, optional: true, required: false
  private _recaptchaPrivateKey?: string; 
  public get recaptchaPrivateKey() {
    return this.getStringAttribute('recaptcha_private_key');
  }
  public set recaptchaPrivateKey(value: string) {
    this._recaptchaPrivateKey = value;
  }
  public resetRecaptchaPrivateKey() {
    this._recaptchaPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaPrivateKeyInput() {
    return this._recaptchaPrivateKey;
  }

  // recaptcha_site_key - computed: true, optional: true, required: false
  private _recaptchaSiteKey?: string; 
  public get recaptchaSiteKey() {
    return this.getStringAttribute('recaptcha_site_key');
  }
  public set recaptchaSiteKey(value: string) {
    this._recaptchaSiteKey = value;
  }
  public resetRecaptchaSiteKey() {
    this._recaptchaSiteKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaSiteKeyInput() {
    return this._recaptchaSiteKey;
  }

  // receive_max_input_size - computed: true, optional: true, required: false
  private _receiveMaxInputSize?: number; 
  public get receiveMaxInputSize() {
    return this.getNumberAttribute('receive_max_input_size');
  }
  public set receiveMaxInputSize(value: number) {
    this._receiveMaxInputSize = value;
  }
  public resetReceiveMaxInputSize() {
    this._receiveMaxInputSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveMaxInputSizeInput() {
    return this._receiveMaxInputSize;
  }

  // receptive_cluster_agents_enabled - computed: true, optional: true, required: false
  private _receptiveClusterAgentsEnabled?: boolean | cdktf.IResolvable; 
  public get receptiveClusterAgentsEnabled() {
    return this.getBooleanAttribute('receptive_cluster_agents_enabled');
  }
  public set receptiveClusterAgentsEnabled(value: boolean | cdktf.IResolvable) {
    this._receptiveClusterAgentsEnabled = value;
  }
  public resetReceptiveClusterAgentsEnabled() {
    this._receptiveClusterAgentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receptiveClusterAgentsEnabledInput() {
    return this._receptiveClusterAgentsEnabled;
  }

  // remember_me_enabled - computed: true, optional: true, required: false
  private _rememberMeEnabled?: boolean | cdktf.IResolvable; 
  public get rememberMeEnabled() {
    return this.getBooleanAttribute('remember_me_enabled');
  }
  public set rememberMeEnabled(value: boolean | cdktf.IResolvable) {
    this._rememberMeEnabled = value;
  }
  public resetRememberMeEnabled() {
    this._rememberMeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberMeEnabledInput() {
    return this._rememberMeEnabled;
  }

  // repository_checks_enabled - computed: true, optional: true, required: false
  private _repositoryChecksEnabled?: boolean | cdktf.IResolvable; 
  public get repositoryChecksEnabled() {
    return this.getBooleanAttribute('repository_checks_enabled');
  }
  public set repositoryChecksEnabled(value: boolean | cdktf.IResolvable) {
    this._repositoryChecksEnabled = value;
  }
  public resetRepositoryChecksEnabled() {
    this._repositoryChecksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryChecksEnabledInput() {
    return this._repositoryChecksEnabled;
  }

  // repository_size_limit - computed: true, optional: true, required: false
  private _repositorySizeLimit?: number; 
  public get repositorySizeLimit() {
    return this.getNumberAttribute('repository_size_limit');
  }
  public set repositorySizeLimit(value: number) {
    this._repositorySizeLimit = value;
  }
  public resetRepositorySizeLimit() {
    this._repositorySizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositorySizeLimitInput() {
    return this._repositorySizeLimit;
  }

  // repository_storages_weighted - computed: true, optional: true, required: false
  private _repositoryStoragesWeighted?: { [key: string]: number }; 
  public get repositoryStoragesWeighted() {
    return this.getNumberMapAttribute('repository_storages_weighted');
  }
  public set repositoryStoragesWeighted(value: { [key: string]: number }) {
    this._repositoryStoragesWeighted = value;
  }
  public resetRepositoryStoragesWeighted() {
    this._repositoryStoragesWeighted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryStoragesWeightedInput() {
    return this._repositoryStoragesWeighted;
  }

  // require_admin_approval_after_user_signup - computed: true, optional: true, required: false
  private _requireAdminApprovalAfterUserSignup?: boolean | cdktf.IResolvable; 
  public get requireAdminApprovalAfterUserSignup() {
    return this.getBooleanAttribute('require_admin_approval_after_user_signup');
  }
  public set requireAdminApprovalAfterUserSignup(value: boolean | cdktf.IResolvable) {
    this._requireAdminApprovalAfterUserSignup = value;
  }
  public resetRequireAdminApprovalAfterUserSignup() {
    this._requireAdminApprovalAfterUserSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminApprovalAfterUserSignupInput() {
    return this._requireAdminApprovalAfterUserSignup;
  }

  // require_admin_two_factor_authentication - computed: true, optional: true, required: false
  private _requireAdminTwoFactorAuthentication?: boolean | cdktf.IResolvable; 
  public get requireAdminTwoFactorAuthentication() {
    return this.getBooleanAttribute('require_admin_two_factor_authentication');
  }
  public set requireAdminTwoFactorAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireAdminTwoFactorAuthentication = value;
  }
  public resetRequireAdminTwoFactorAuthentication() {
    this._requireAdminTwoFactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminTwoFactorAuthenticationInput() {
    return this._requireAdminTwoFactorAuthentication;
  }

  // require_personal_access_token_expiry - computed: true, optional: true, required: false
  private _requirePersonalAccessTokenExpiry?: boolean | cdktf.IResolvable; 
  public get requirePersonalAccessTokenExpiry() {
    return this.getBooleanAttribute('require_personal_access_token_expiry');
  }
  public set requirePersonalAccessTokenExpiry(value: boolean | cdktf.IResolvable) {
    this._requirePersonalAccessTokenExpiry = value;
  }
  public resetRequirePersonalAccessTokenExpiry() {
    this._requirePersonalAccessTokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePersonalAccessTokenExpiryInput() {
    return this._requirePersonalAccessTokenExpiry;
  }

  // require_two_factor_authentication - computed: true, optional: true, required: false
  private _requireTwoFactorAuthentication?: boolean | cdktf.IResolvable; 
  public get requireTwoFactorAuthentication() {
    return this.getBooleanAttribute('require_two_factor_authentication');
  }
  public set requireTwoFactorAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireTwoFactorAuthentication = value;
  }
  public resetRequireTwoFactorAuthentication() {
    this._requireTwoFactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTwoFactorAuthenticationInput() {
    return this._requireTwoFactorAuthentication;
  }

  // restricted_visibility_levels - computed: true, optional: true, required: false
  private _restrictedVisibilityLevels?: string[]; 
  public get restrictedVisibilityLevels() {
    return this.getListAttribute('restricted_visibility_levels');
  }
  public set restrictedVisibilityLevels(value: string[]) {
    this._restrictedVisibilityLevels = value;
  }
  public resetRestrictedVisibilityLevels() {
    this._restrictedVisibilityLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVisibilityLevelsInput() {
    return this._restrictedVisibilityLevels;
  }

  // rsa_key_restriction - computed: true, optional: true, required: false
  private _rsaKeyRestriction?: number; 
  public get rsaKeyRestriction() {
    return this.getNumberAttribute('rsa_key_restriction');
  }
  public set rsaKeyRestriction(value: number) {
    this._rsaKeyRestriction = value;
  }
  public resetRsaKeyRestriction() {
    this._rsaKeyRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaKeyRestrictionInput() {
    return this._rsaKeyRestriction;
  }

  // search_rate_limit - computed: true, optional: true, required: false
  private _searchRateLimit?: number; 
  public get searchRateLimit() {
    return this.getNumberAttribute('search_rate_limit');
  }
  public set searchRateLimit(value: number) {
    this._searchRateLimit = value;
  }
  public resetSearchRateLimit() {
    this._searchRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchRateLimitInput() {
    return this._searchRateLimit;
  }

  // search_rate_limit_unauthenticated - computed: true, optional: true, required: false
  private _searchRateLimitUnauthenticated?: number; 
  public get searchRateLimitUnauthenticated() {
    return this.getNumberAttribute('search_rate_limit_unauthenticated');
  }
  public set searchRateLimitUnauthenticated(value: number) {
    this._searchRateLimitUnauthenticated = value;
  }
  public resetSearchRateLimitUnauthenticated() {
    this._searchRateLimitUnauthenticated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchRateLimitUnauthenticatedInput() {
    return this._searchRateLimitUnauthenticated;
  }

  // security_approval_policies_limit - computed: true, optional: true, required: false
  private _securityApprovalPoliciesLimit?: number; 
  public get securityApprovalPoliciesLimit() {
    return this.getNumberAttribute('security_approval_policies_limit');
  }
  public set securityApprovalPoliciesLimit(value: number) {
    this._securityApprovalPoliciesLimit = value;
  }
  public resetSecurityApprovalPoliciesLimit() {
    this._securityApprovalPoliciesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityApprovalPoliciesLimitInput() {
    return this._securityApprovalPoliciesLimit;
  }

  // security_policy_global_group_approvers_enabled - computed: true, optional: true, required: false
  private _securityPolicyGlobalGroupApproversEnabled?: boolean | cdktf.IResolvable; 
  public get securityPolicyGlobalGroupApproversEnabled() {
    return this.getBooleanAttribute('security_policy_global_group_approvers_enabled');
  }
  public set securityPolicyGlobalGroupApproversEnabled(value: boolean | cdktf.IResolvable) {
    this._securityPolicyGlobalGroupApproversEnabled = value;
  }
  public resetSecurityPolicyGlobalGroupApproversEnabled() {
    this._securityPolicyGlobalGroupApproversEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyGlobalGroupApproversEnabledInput() {
    return this._securityPolicyGlobalGroupApproversEnabled;
  }

  // security_txt_content - computed: true, optional: true, required: false
  private _securityTxtContent?: string; 
  public get securityTxtContent() {
    return this.getStringAttribute('security_txt_content');
  }
  public set securityTxtContent(value: string) {
    this._securityTxtContent = value;
  }
  public resetSecurityTxtContent() {
    this._securityTxtContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTxtContentInput() {
    return this._securityTxtContent;
  }

  // send_user_confirmation_email - computed: true, optional: true, required: false
  private _sendUserConfirmationEmail?: boolean | cdktf.IResolvable; 
  public get sendUserConfirmationEmail() {
    return this.getBooleanAttribute('send_user_confirmation_email');
  }
  public set sendUserConfirmationEmail(value: boolean | cdktf.IResolvable) {
    this._sendUserConfirmationEmail = value;
  }
  public resetSendUserConfirmationEmail() {
    this._sendUserConfirmationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendUserConfirmationEmailInput() {
    return this._sendUserConfirmationEmail;
  }

  // service_access_tokens_expiration_enforced - computed: true, optional: true, required: false
  private _serviceAccessTokensExpirationEnforced?: boolean | cdktf.IResolvable; 
  public get serviceAccessTokensExpirationEnforced() {
    return this.getBooleanAttribute('service_access_tokens_expiration_enforced');
  }
  public set serviceAccessTokensExpirationEnforced(value: boolean | cdktf.IResolvable) {
    this._serviceAccessTokensExpirationEnforced = value;
  }
  public resetServiceAccessTokensExpirationEnforced() {
    this._serviceAccessTokensExpirationEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessTokensExpirationEnforcedInput() {
    return this._serviceAccessTokensExpirationEnforced;
  }

  // session_expire_delay - computed: true, optional: true, required: false
  private _sessionExpireDelay?: number; 
  public get sessionExpireDelay() {
    return this.getNumberAttribute('session_expire_delay');
  }
  public set sessionExpireDelay(value: number) {
    this._sessionExpireDelay = value;
  }
  public resetSessionExpireDelay() {
    this._sessionExpireDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionExpireDelayInput() {
    return this._sessionExpireDelay;
  }

  // shared_runners_enabled - computed: true, optional: true, required: false
  private _sharedRunnersEnabled?: boolean | cdktf.IResolvable; 
  public get sharedRunnersEnabled() {
    return this.getBooleanAttribute('shared_runners_enabled');
  }
  public set sharedRunnersEnabled(value: boolean | cdktf.IResolvable) {
    this._sharedRunnersEnabled = value;
  }
  public resetSharedRunnersEnabled() {
    this._sharedRunnersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRunnersEnabledInput() {
    return this._sharedRunnersEnabled;
  }

  // shared_runners_minutes - computed: true, optional: true, required: false
  private _sharedRunnersMinutes?: number; 
  public get sharedRunnersMinutes() {
    return this.getNumberAttribute('shared_runners_minutes');
  }
  public set sharedRunnersMinutes(value: number) {
    this._sharedRunnersMinutes = value;
  }
  public resetSharedRunnersMinutes() {
    this._sharedRunnersMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRunnersMinutesInput() {
    return this._sharedRunnersMinutes;
  }

  // shared_runners_text - computed: true, optional: true, required: false
  private _sharedRunnersText?: string; 
  public get sharedRunnersText() {
    return this.getStringAttribute('shared_runners_text');
  }
  public set sharedRunnersText(value: string) {
    this._sharedRunnersText = value;
  }
  public resetSharedRunnersText() {
    this._sharedRunnersText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRunnersTextInput() {
    return this._sharedRunnersText;
  }

  // sidekiq_job_limiter_compression_threshold_bytes - computed: true, optional: true, required: false
  private _sidekiqJobLimiterCompressionThresholdBytes?: number; 
  public get sidekiqJobLimiterCompressionThresholdBytes() {
    return this.getNumberAttribute('sidekiq_job_limiter_compression_threshold_bytes');
  }
  public set sidekiqJobLimiterCompressionThresholdBytes(value: number) {
    this._sidekiqJobLimiterCompressionThresholdBytes = value;
  }
  public resetSidekiqJobLimiterCompressionThresholdBytes() {
    this._sidekiqJobLimiterCompressionThresholdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidekiqJobLimiterCompressionThresholdBytesInput() {
    return this._sidekiqJobLimiterCompressionThresholdBytes;
  }

  // sidekiq_job_limiter_limit_bytes - computed: true, optional: true, required: false
  private _sidekiqJobLimiterLimitBytes?: number; 
  public get sidekiqJobLimiterLimitBytes() {
    return this.getNumberAttribute('sidekiq_job_limiter_limit_bytes');
  }
  public set sidekiqJobLimiterLimitBytes(value: number) {
    this._sidekiqJobLimiterLimitBytes = value;
  }
  public resetSidekiqJobLimiterLimitBytes() {
    this._sidekiqJobLimiterLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidekiqJobLimiterLimitBytesInput() {
    return this._sidekiqJobLimiterLimitBytes;
  }

  // sidekiq_job_limiter_mode - computed: true, optional: true, required: false
  private _sidekiqJobLimiterMode?: string; 
  public get sidekiqJobLimiterMode() {
    return this.getStringAttribute('sidekiq_job_limiter_mode');
  }
  public set sidekiqJobLimiterMode(value: string) {
    this._sidekiqJobLimiterMode = value;
  }
  public resetSidekiqJobLimiterMode() {
    this._sidekiqJobLimiterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidekiqJobLimiterModeInput() {
    return this._sidekiqJobLimiterMode;
  }

  // sign_in_text - computed: true, optional: true, required: false
  private _signInText?: string; 
  public get signInText() {
    return this.getStringAttribute('sign_in_text');
  }
  public set signInText(value: string) {
    this._signInText = value;
  }
  public resetSignInText() {
    this._signInText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInTextInput() {
    return this._signInText;
  }

  // signup_enabled - computed: true, optional: true, required: false
  private _signupEnabled?: boolean | cdktf.IResolvable; 
  public get signupEnabled() {
    return this.getBooleanAttribute('signup_enabled');
  }
  public set signupEnabled(value: boolean | cdktf.IResolvable) {
    this._signupEnabled = value;
  }
  public resetSignupEnabled() {
    this._signupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signupEnabledInput() {
    return this._signupEnabled;
  }

  // silent_admin_exports_enabled - computed: true, optional: true, required: false
  private _silentAdminExportsEnabled?: boolean | cdktf.IResolvable; 
  public get silentAdminExportsEnabled() {
    return this.getBooleanAttribute('silent_admin_exports_enabled');
  }
  public set silentAdminExportsEnabled(value: boolean | cdktf.IResolvable) {
    this._silentAdminExportsEnabled = value;
  }
  public resetSilentAdminExportsEnabled() {
    this._silentAdminExportsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentAdminExportsEnabledInput() {
    return this._silentAdminExportsEnabled;
  }

  // silent_mode_enabled - computed: true, optional: true, required: false
  private _silentModeEnabled?: boolean | cdktf.IResolvable; 
  public get silentModeEnabled() {
    return this.getBooleanAttribute('silent_mode_enabled');
  }
  public set silentModeEnabled(value: boolean | cdktf.IResolvable) {
    this._silentModeEnabled = value;
  }
  public resetSilentModeEnabled() {
    this._silentModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentModeEnabledInput() {
    return this._silentModeEnabled;
  }

  // slack_app_enabled - computed: true, optional: true, required: false
  private _slackAppEnabled?: boolean | cdktf.IResolvable; 
  public get slackAppEnabled() {
    return this.getBooleanAttribute('slack_app_enabled');
  }
  public set slackAppEnabled(value: boolean | cdktf.IResolvable) {
    this._slackAppEnabled = value;
  }
  public resetSlackAppEnabled() {
    this._slackAppEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAppEnabledInput() {
    return this._slackAppEnabled;
  }

  // slack_app_id - computed: true, optional: true, required: false
  private _slackAppId?: string; 
  public get slackAppId() {
    return this.getStringAttribute('slack_app_id');
  }
  public set slackAppId(value: string) {
    this._slackAppId = value;
  }
  public resetSlackAppId() {
    this._slackAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAppIdInput() {
    return this._slackAppId;
  }

  // slack_app_secret - computed: true, optional: true, required: false
  private _slackAppSecret?: string; 
  public get slackAppSecret() {
    return this.getStringAttribute('slack_app_secret');
  }
  public set slackAppSecret(value: string) {
    this._slackAppSecret = value;
  }
  public resetSlackAppSecret() {
    this._slackAppSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAppSecretInput() {
    return this._slackAppSecret;
  }

  // slack_app_signing_secret - computed: true, optional: true, required: false
  private _slackAppSigningSecret?: string; 
  public get slackAppSigningSecret() {
    return this.getStringAttribute('slack_app_signing_secret');
  }
  public set slackAppSigningSecret(value: string) {
    this._slackAppSigningSecret = value;
  }
  public resetSlackAppSigningSecret() {
    this._slackAppSigningSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAppSigningSecretInput() {
    return this._slackAppSigningSecret;
  }

  // slack_app_verification_token - computed: true, optional: true, required: false
  private _slackAppVerificationToken?: string; 
  public get slackAppVerificationToken() {
    return this.getStringAttribute('slack_app_verification_token');
  }
  public set slackAppVerificationToken(value: string) {
    this._slackAppVerificationToken = value;
  }
  public resetSlackAppVerificationToken() {
    this._slackAppVerificationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAppVerificationTokenInput() {
    return this._slackAppVerificationToken;
  }

  // snippet_size_limit - computed: true, optional: true, required: false
  private _snippetSizeLimit?: number; 
  public get snippetSizeLimit() {
    return this.getNumberAttribute('snippet_size_limit');
  }
  public set snippetSizeLimit(value: number) {
    this._snippetSizeLimit = value;
  }
  public resetSnippetSizeLimit() {
    this._snippetSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetSizeLimitInput() {
    return this._snippetSizeLimit;
  }

  // snowplow_app_id - computed: true, optional: true, required: false
  private _snowplowAppId?: string; 
  public get snowplowAppId() {
    return this.getStringAttribute('snowplow_app_id');
  }
  public set snowplowAppId(value: string) {
    this._snowplowAppId = value;
  }
  public resetSnowplowAppId() {
    this._snowplowAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowplowAppIdInput() {
    return this._snowplowAppId;
  }

  // snowplow_collector_hostname - computed: true, optional: true, required: false
  private _snowplowCollectorHostname?: string; 
  public get snowplowCollectorHostname() {
    return this.getStringAttribute('snowplow_collector_hostname');
  }
  public set snowplowCollectorHostname(value: string) {
    this._snowplowCollectorHostname = value;
  }
  public resetSnowplowCollectorHostname() {
    this._snowplowCollectorHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowplowCollectorHostnameInput() {
    return this._snowplowCollectorHostname;
  }

  // snowplow_cookie_domain - computed: true, optional: true, required: false
  private _snowplowCookieDomain?: string; 
  public get snowplowCookieDomain() {
    return this.getStringAttribute('snowplow_cookie_domain');
  }
  public set snowplowCookieDomain(value: string) {
    this._snowplowCookieDomain = value;
  }
  public resetSnowplowCookieDomain() {
    this._snowplowCookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowplowCookieDomainInput() {
    return this._snowplowCookieDomain;
  }

  // snowplow_database_collector_hostname - computed: true, optional: true, required: false
  private _snowplowDatabaseCollectorHostname?: string; 
  public get snowplowDatabaseCollectorHostname() {
    return this.getStringAttribute('snowplow_database_collector_hostname');
  }
  public set snowplowDatabaseCollectorHostname(value: string) {
    this._snowplowDatabaseCollectorHostname = value;
  }
  public resetSnowplowDatabaseCollectorHostname() {
    this._snowplowDatabaseCollectorHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowplowDatabaseCollectorHostnameInput() {
    return this._snowplowDatabaseCollectorHostname;
  }

  // snowplow_enabled - computed: true, optional: true, required: false
  private _snowplowEnabled?: boolean | cdktf.IResolvable; 
  public get snowplowEnabled() {
    return this.getBooleanAttribute('snowplow_enabled');
  }
  public set snowplowEnabled(value: boolean | cdktf.IResolvable) {
    this._snowplowEnabled = value;
  }
  public resetSnowplowEnabled() {
    this._snowplowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowplowEnabledInput() {
    return this._snowplowEnabled;
  }

  // sourcegraph_enabled - computed: true, optional: true, required: false
  private _sourcegraphEnabled?: boolean | cdktf.IResolvable; 
  public get sourcegraphEnabled() {
    return this.getBooleanAttribute('sourcegraph_enabled');
  }
  public set sourcegraphEnabled(value: boolean | cdktf.IResolvable) {
    this._sourcegraphEnabled = value;
  }
  public resetSourcegraphEnabled() {
    this._sourcegraphEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcegraphEnabledInput() {
    return this._sourcegraphEnabled;
  }

  // sourcegraph_public_only - computed: true, optional: true, required: false
  private _sourcegraphPublicOnly?: boolean | cdktf.IResolvable; 
  public get sourcegraphPublicOnly() {
    return this.getBooleanAttribute('sourcegraph_public_only');
  }
  public set sourcegraphPublicOnly(value: boolean | cdktf.IResolvable) {
    this._sourcegraphPublicOnly = value;
  }
  public resetSourcegraphPublicOnly() {
    this._sourcegraphPublicOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcegraphPublicOnlyInput() {
    return this._sourcegraphPublicOnly;
  }

  // sourcegraph_url - computed: true, optional: true, required: false
  private _sourcegraphUrl?: string; 
  public get sourcegraphUrl() {
    return this.getStringAttribute('sourcegraph_url');
  }
  public set sourcegraphUrl(value: string) {
    this._sourcegraphUrl = value;
  }
  public resetSourcegraphUrl() {
    this._sourcegraphUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcegraphUrlInput() {
    return this._sourcegraphUrl;
  }

  // spam_check_api_key - computed: true, optional: true, required: false
  private _spamCheckApiKey?: string; 
  public get spamCheckApiKey() {
    return this.getStringAttribute('spam_check_api_key');
  }
  public set spamCheckApiKey(value: string) {
    this._spamCheckApiKey = value;
  }
  public resetSpamCheckApiKey() {
    this._spamCheckApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamCheckApiKeyInput() {
    return this._spamCheckApiKey;
  }

  // spam_check_endpoint_enabled - computed: true, optional: true, required: false
  private _spamCheckEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get spamCheckEndpointEnabled() {
    return this.getBooleanAttribute('spam_check_endpoint_enabled');
  }
  public set spamCheckEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._spamCheckEndpointEnabled = value;
  }
  public resetSpamCheckEndpointEnabled() {
    this._spamCheckEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamCheckEndpointEnabledInput() {
    return this._spamCheckEndpointEnabled;
  }

  // spam_check_endpoint_url - computed: true, optional: true, required: false
  private _spamCheckEndpointUrl?: string; 
  public get spamCheckEndpointUrl() {
    return this.getStringAttribute('spam_check_endpoint_url');
  }
  public set spamCheckEndpointUrl(value: string) {
    this._spamCheckEndpointUrl = value;
  }
  public resetSpamCheckEndpointUrl() {
    this._spamCheckEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamCheckEndpointUrlInput() {
    return this._spamCheckEndpointUrl;
  }

  // static_objects_external_storage_auth_token - computed: false, optional: true, required: false
  private _staticObjectsExternalStorageAuthToken?: string; 
  public get staticObjectsExternalStorageAuthToken() {
    return this.getStringAttribute('static_objects_external_storage_auth_token');
  }
  public set staticObjectsExternalStorageAuthToken(value: string) {
    this._staticObjectsExternalStorageAuthToken = value;
  }
  public resetStaticObjectsExternalStorageAuthToken() {
    this._staticObjectsExternalStorageAuthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticObjectsExternalStorageAuthTokenInput() {
    return this._staticObjectsExternalStorageAuthToken;
  }

  // static_objects_external_storage_url - computed: false, optional: true, required: false
  private _staticObjectsExternalStorageUrl?: string; 
  public get staticObjectsExternalStorageUrl() {
    return this.getStringAttribute('static_objects_external_storage_url');
  }
  public set staticObjectsExternalStorageUrl(value: string) {
    this._staticObjectsExternalStorageUrl = value;
  }
  public resetStaticObjectsExternalStorageUrl() {
    this._staticObjectsExternalStorageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticObjectsExternalStorageUrlInput() {
    return this._staticObjectsExternalStorageUrl;
  }

  // suggest_pipeline_enabled - computed: true, optional: true, required: false
  private _suggestPipelineEnabled?: boolean | cdktf.IResolvable; 
  public get suggestPipelineEnabled() {
    return this.getBooleanAttribute('suggest_pipeline_enabled');
  }
  public set suggestPipelineEnabled(value: boolean | cdktf.IResolvable) {
    this._suggestPipelineEnabled = value;
  }
  public resetSuggestPipelineEnabled() {
    this._suggestPipelineEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestPipelineEnabledInput() {
    return this._suggestPipelineEnabled;
  }

  // terminal_max_session_time - computed: true, optional: true, required: false
  private _terminalMaxSessionTime?: number; 
  public get terminalMaxSessionTime() {
    return this.getNumberAttribute('terminal_max_session_time');
  }
  public set terminalMaxSessionTime(value: number) {
    this._terminalMaxSessionTime = value;
  }
  public resetTerminalMaxSessionTime() {
    this._terminalMaxSessionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalMaxSessionTimeInput() {
    return this._terminalMaxSessionTime;
  }

  // terms - computed: true, optional: true, required: false
  private _terms?: string; 
  public get terms() {
    return this.getStringAttribute('terms');
  }
  public set terms(value: string) {
    this._terms = value;
  }
  public resetTerms() {
    this._terms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms;
  }

  // throttle_authenticated_api_enabled - computed: true, optional: true, required: false
  private _throttleAuthenticatedApiEnabled?: boolean | cdktf.IResolvable; 
  public get throttleAuthenticatedApiEnabled() {
    return this.getBooleanAttribute('throttle_authenticated_api_enabled');
  }
  public set throttleAuthenticatedApiEnabled(value: boolean | cdktf.IResolvable) {
    this._throttleAuthenticatedApiEnabled = value;
  }
  public resetThrottleAuthenticatedApiEnabled() {
    this._throttleAuthenticatedApiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedApiEnabledInput() {
    return this._throttleAuthenticatedApiEnabled;
  }

  // throttle_authenticated_api_period_in_seconds - computed: true, optional: true, required: false
  private _throttleAuthenticatedApiPeriodInSeconds?: number; 
  public get throttleAuthenticatedApiPeriodInSeconds() {
    return this.getNumberAttribute('throttle_authenticated_api_period_in_seconds');
  }
  public set throttleAuthenticatedApiPeriodInSeconds(value: number) {
    this._throttleAuthenticatedApiPeriodInSeconds = value;
  }
  public resetThrottleAuthenticatedApiPeriodInSeconds() {
    this._throttleAuthenticatedApiPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedApiPeriodInSecondsInput() {
    return this._throttleAuthenticatedApiPeriodInSeconds;
  }

  // throttle_authenticated_api_requests_per_period - computed: true, optional: true, required: false
  private _throttleAuthenticatedApiRequestsPerPeriod?: number; 
  public get throttleAuthenticatedApiRequestsPerPeriod() {
    return this.getNumberAttribute('throttle_authenticated_api_requests_per_period');
  }
  public set throttleAuthenticatedApiRequestsPerPeriod(value: number) {
    this._throttleAuthenticatedApiRequestsPerPeriod = value;
  }
  public resetThrottleAuthenticatedApiRequestsPerPeriod() {
    this._throttleAuthenticatedApiRequestsPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedApiRequestsPerPeriodInput() {
    return this._throttleAuthenticatedApiRequestsPerPeriod;
  }

  // throttle_authenticated_packages_api_enabled - computed: true, optional: true, required: false
  private _throttleAuthenticatedPackagesApiEnabled?: boolean | cdktf.IResolvable; 
  public get throttleAuthenticatedPackagesApiEnabled() {
    return this.getBooleanAttribute('throttle_authenticated_packages_api_enabled');
  }
  public set throttleAuthenticatedPackagesApiEnabled(value: boolean | cdktf.IResolvable) {
    this._throttleAuthenticatedPackagesApiEnabled = value;
  }
  public resetThrottleAuthenticatedPackagesApiEnabled() {
    this._throttleAuthenticatedPackagesApiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedPackagesApiEnabledInput() {
    return this._throttleAuthenticatedPackagesApiEnabled;
  }

  // throttle_authenticated_packages_api_period_in_seconds - computed: true, optional: true, required: false
  private _throttleAuthenticatedPackagesApiPeriodInSeconds?: number; 
  public get throttleAuthenticatedPackagesApiPeriodInSeconds() {
    return this.getNumberAttribute('throttle_authenticated_packages_api_period_in_seconds');
  }
  public set throttleAuthenticatedPackagesApiPeriodInSeconds(value: number) {
    this._throttleAuthenticatedPackagesApiPeriodInSeconds = value;
  }
  public resetThrottleAuthenticatedPackagesApiPeriodInSeconds() {
    this._throttleAuthenticatedPackagesApiPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedPackagesApiPeriodInSecondsInput() {
    return this._throttleAuthenticatedPackagesApiPeriodInSeconds;
  }

  // throttle_authenticated_packages_api_requests_per_period - computed: true, optional: true, required: false
  private _throttleAuthenticatedPackagesApiRequestsPerPeriod?: number; 
  public get throttleAuthenticatedPackagesApiRequestsPerPeriod() {
    return this.getNumberAttribute('throttle_authenticated_packages_api_requests_per_period');
  }
  public set throttleAuthenticatedPackagesApiRequestsPerPeriod(value: number) {
    this._throttleAuthenticatedPackagesApiRequestsPerPeriod = value;
  }
  public resetThrottleAuthenticatedPackagesApiRequestsPerPeriod() {
    this._throttleAuthenticatedPackagesApiRequestsPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedPackagesApiRequestsPerPeriodInput() {
    return this._throttleAuthenticatedPackagesApiRequestsPerPeriod;
  }

  // throttle_authenticated_web_enabled - computed: true, optional: true, required: false
  private _throttleAuthenticatedWebEnabled?: boolean | cdktf.IResolvable; 
  public get throttleAuthenticatedWebEnabled() {
    return this.getBooleanAttribute('throttle_authenticated_web_enabled');
  }
  public set throttleAuthenticatedWebEnabled(value: boolean | cdktf.IResolvable) {
    this._throttleAuthenticatedWebEnabled = value;
  }
  public resetThrottleAuthenticatedWebEnabled() {
    this._throttleAuthenticatedWebEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedWebEnabledInput() {
    return this._throttleAuthenticatedWebEnabled;
  }

  // throttle_authenticated_web_period_in_seconds - computed: true, optional: true, required: false
  private _throttleAuthenticatedWebPeriodInSeconds?: number; 
  public get throttleAuthenticatedWebPeriodInSeconds() {
    return this.getNumberAttribute('throttle_authenticated_web_period_in_seconds');
  }
  public set throttleAuthenticatedWebPeriodInSeconds(value: number) {
    this._throttleAuthenticatedWebPeriodInSeconds = value;
  }
  public resetThrottleAuthenticatedWebPeriodInSeconds() {
    this._throttleAuthenticatedWebPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedWebPeriodInSecondsInput() {
    return this._throttleAuthenticatedWebPeriodInSeconds;
  }

  // throttle_authenticated_web_requests_per_period - computed: true, optional: true, required: false
  private _throttleAuthenticatedWebRequestsPerPeriod?: number; 
  public get throttleAuthenticatedWebRequestsPerPeriod() {
    return this.getNumberAttribute('throttle_authenticated_web_requests_per_period');
  }
  public set throttleAuthenticatedWebRequestsPerPeriod(value: number) {
    this._throttleAuthenticatedWebRequestsPerPeriod = value;
  }
  public resetThrottleAuthenticatedWebRequestsPerPeriod() {
    this._throttleAuthenticatedWebRequestsPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleAuthenticatedWebRequestsPerPeriodInput() {
    return this._throttleAuthenticatedWebRequestsPerPeriod;
  }

  // throttle_unauthenticated_api_enabled - computed: true, optional: true, required: false
  private _throttleUnauthenticatedApiEnabled?: boolean | cdktf.IResolvable; 
  public get throttleUnauthenticatedApiEnabled() {
    return this.getBooleanAttribute('throttle_unauthenticated_api_enabled');
  }
  public set throttleUnauthenticatedApiEnabled(value: boolean | cdktf.IResolvable) {
    this._throttleUnauthenticatedApiEnabled = value;
  }
  public resetThrottleUnauthenticatedApiEnabled() {
    this._throttleUnauthenticatedApiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedApiEnabledInput() {
    return this._throttleUnauthenticatedApiEnabled;
  }

  // throttle_unauthenticated_api_period_in_seconds - computed: true, optional: true, required: false
  private _throttleUnauthenticatedApiPeriodInSeconds?: number; 
  public get throttleUnauthenticatedApiPeriodInSeconds() {
    return this.getNumberAttribute('throttle_unauthenticated_api_period_in_seconds');
  }
  public set throttleUnauthenticatedApiPeriodInSeconds(value: number) {
    this._throttleUnauthenticatedApiPeriodInSeconds = value;
  }
  public resetThrottleUnauthenticatedApiPeriodInSeconds() {
    this._throttleUnauthenticatedApiPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedApiPeriodInSecondsInput() {
    return this._throttleUnauthenticatedApiPeriodInSeconds;
  }

  // throttle_unauthenticated_api_requests_per_period - computed: true, optional: true, required: false
  private _throttleUnauthenticatedApiRequestsPerPeriod?: number; 
  public get throttleUnauthenticatedApiRequestsPerPeriod() {
    return this.getNumberAttribute('throttle_unauthenticated_api_requests_per_period');
  }
  public set throttleUnauthenticatedApiRequestsPerPeriod(value: number) {
    this._throttleUnauthenticatedApiRequestsPerPeriod = value;
  }
  public resetThrottleUnauthenticatedApiRequestsPerPeriod() {
    this._throttleUnauthenticatedApiRequestsPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedApiRequestsPerPeriodInput() {
    return this._throttleUnauthenticatedApiRequestsPerPeriod;
  }

  // throttle_unauthenticated_packages_api_enabled - computed: true, optional: true, required: false
  private _throttleUnauthenticatedPackagesApiEnabled?: boolean | cdktf.IResolvable; 
  public get throttleUnauthenticatedPackagesApiEnabled() {
    return this.getBooleanAttribute('throttle_unauthenticated_packages_api_enabled');
  }
  public set throttleUnauthenticatedPackagesApiEnabled(value: boolean | cdktf.IResolvable) {
    this._throttleUnauthenticatedPackagesApiEnabled = value;
  }
  public resetThrottleUnauthenticatedPackagesApiEnabled() {
    this._throttleUnauthenticatedPackagesApiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedPackagesApiEnabledInput() {
    return this._throttleUnauthenticatedPackagesApiEnabled;
  }

  // throttle_unauthenticated_packages_api_period_in_seconds - computed: true, optional: true, required: false
  private _throttleUnauthenticatedPackagesApiPeriodInSeconds?: number; 
  public get throttleUnauthenticatedPackagesApiPeriodInSeconds() {
    return this.getNumberAttribute('throttle_unauthenticated_packages_api_period_in_seconds');
  }
  public set throttleUnauthenticatedPackagesApiPeriodInSeconds(value: number) {
    this._throttleUnauthenticatedPackagesApiPeriodInSeconds = value;
  }
  public resetThrottleUnauthenticatedPackagesApiPeriodInSeconds() {
    this._throttleUnauthenticatedPackagesApiPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedPackagesApiPeriodInSecondsInput() {
    return this._throttleUnauthenticatedPackagesApiPeriodInSeconds;
  }

  // throttle_unauthenticated_packages_api_requests_per_period - computed: true, optional: true, required: false
  private _throttleUnauthenticatedPackagesApiRequestsPerPeriod?: number; 
  public get throttleUnauthenticatedPackagesApiRequestsPerPeriod() {
    return this.getNumberAttribute('throttle_unauthenticated_packages_api_requests_per_period');
  }
  public set throttleUnauthenticatedPackagesApiRequestsPerPeriod(value: number) {
    this._throttleUnauthenticatedPackagesApiRequestsPerPeriod = value;
  }
  public resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod() {
    this._throttleUnauthenticatedPackagesApiRequestsPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedPackagesApiRequestsPerPeriodInput() {
    return this._throttleUnauthenticatedPackagesApiRequestsPerPeriod;
  }

  // throttle_unauthenticated_web_enabled - computed: true, optional: true, required: false
  private _throttleUnauthenticatedWebEnabled?: boolean | cdktf.IResolvable; 
  public get throttleUnauthenticatedWebEnabled() {
    return this.getBooleanAttribute('throttle_unauthenticated_web_enabled');
  }
  public set throttleUnauthenticatedWebEnabled(value: boolean | cdktf.IResolvable) {
    this._throttleUnauthenticatedWebEnabled = value;
  }
  public resetThrottleUnauthenticatedWebEnabled() {
    this._throttleUnauthenticatedWebEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedWebEnabledInput() {
    return this._throttleUnauthenticatedWebEnabled;
  }

  // throttle_unauthenticated_web_period_in_seconds - computed: true, optional: true, required: false
  private _throttleUnauthenticatedWebPeriodInSeconds?: number; 
  public get throttleUnauthenticatedWebPeriodInSeconds() {
    return this.getNumberAttribute('throttle_unauthenticated_web_period_in_seconds');
  }
  public set throttleUnauthenticatedWebPeriodInSeconds(value: number) {
    this._throttleUnauthenticatedWebPeriodInSeconds = value;
  }
  public resetThrottleUnauthenticatedWebPeriodInSeconds() {
    this._throttleUnauthenticatedWebPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedWebPeriodInSecondsInput() {
    return this._throttleUnauthenticatedWebPeriodInSeconds;
  }

  // throttle_unauthenticated_web_requests_per_period - computed: true, optional: true, required: false
  private _throttleUnauthenticatedWebRequestsPerPeriod?: number; 
  public get throttleUnauthenticatedWebRequestsPerPeriod() {
    return this.getNumberAttribute('throttle_unauthenticated_web_requests_per_period');
  }
  public set throttleUnauthenticatedWebRequestsPerPeriod(value: number) {
    this._throttleUnauthenticatedWebRequestsPerPeriod = value;
  }
  public resetThrottleUnauthenticatedWebRequestsPerPeriod() {
    this._throttleUnauthenticatedWebRequestsPerPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleUnauthenticatedWebRequestsPerPeriodInput() {
    return this._throttleUnauthenticatedWebRequestsPerPeriod;
  }

  // time_tracking_limit_to_hours - computed: true, optional: true, required: false
  private _timeTrackingLimitToHours?: boolean | cdktf.IResolvable; 
  public get timeTrackingLimitToHours() {
    return this.getBooleanAttribute('time_tracking_limit_to_hours');
  }
  public set timeTrackingLimitToHours(value: boolean | cdktf.IResolvable) {
    this._timeTrackingLimitToHours = value;
  }
  public resetTimeTrackingLimitToHours() {
    this._timeTrackingLimitToHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTrackingLimitToHoursInput() {
    return this._timeTrackingLimitToHours;
  }

  // two_factor_grace_period - computed: true, optional: true, required: false
  private _twoFactorGracePeriod?: number; 
  public get twoFactorGracePeriod() {
    return this.getNumberAttribute('two_factor_grace_period');
  }
  public set twoFactorGracePeriod(value: number) {
    this._twoFactorGracePeriod = value;
  }
  public resetTwoFactorGracePeriod() {
    this._twoFactorGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorGracePeriodInput() {
    return this._twoFactorGracePeriod;
  }

  // unconfirmed_users_delete_after_days - computed: true, optional: true, required: false
  private _unconfirmedUsersDeleteAfterDays?: number; 
  public get unconfirmedUsersDeleteAfterDays() {
    return this.getNumberAttribute('unconfirmed_users_delete_after_days');
  }
  public set unconfirmedUsersDeleteAfterDays(value: number) {
    this._unconfirmedUsersDeleteAfterDays = value;
  }
  public resetUnconfirmedUsersDeleteAfterDays() {
    this._unconfirmedUsersDeleteAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unconfirmedUsersDeleteAfterDaysInput() {
    return this._unconfirmedUsersDeleteAfterDays;
  }

  // unique_ips_limit_enabled - computed: true, optional: true, required: false
  private _uniqueIpsLimitEnabled?: boolean | cdktf.IResolvable; 
  public get uniqueIpsLimitEnabled() {
    return this.getBooleanAttribute('unique_ips_limit_enabled');
  }
  public set uniqueIpsLimitEnabled(value: boolean | cdktf.IResolvable) {
    this._uniqueIpsLimitEnabled = value;
  }
  public resetUniqueIpsLimitEnabled() {
    this._uniqueIpsLimitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIpsLimitEnabledInput() {
    return this._uniqueIpsLimitEnabled;
  }

  // unique_ips_limit_per_user - computed: true, optional: true, required: false
  private _uniqueIpsLimitPerUser?: number; 
  public get uniqueIpsLimitPerUser() {
    return this.getNumberAttribute('unique_ips_limit_per_user');
  }
  public set uniqueIpsLimitPerUser(value: number) {
    this._uniqueIpsLimitPerUser = value;
  }
  public resetUniqueIpsLimitPerUser() {
    this._uniqueIpsLimitPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIpsLimitPerUserInput() {
    return this._uniqueIpsLimitPerUser;
  }

  // unique_ips_limit_time_window - computed: true, optional: true, required: false
  private _uniqueIpsLimitTimeWindow?: number; 
  public get uniqueIpsLimitTimeWindow() {
    return this.getNumberAttribute('unique_ips_limit_time_window');
  }
  public set uniqueIpsLimitTimeWindow(value: number) {
    this._uniqueIpsLimitTimeWindow = value;
  }
  public resetUniqueIpsLimitTimeWindow() {
    this._uniqueIpsLimitTimeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIpsLimitTimeWindowInput() {
    return this._uniqueIpsLimitTimeWindow;
  }

  // update_runner_versions_enabled - computed: true, optional: true, required: false
  private _updateRunnerVersionsEnabled?: boolean | cdktf.IResolvable; 
  public get updateRunnerVersionsEnabled() {
    return this.getBooleanAttribute('update_runner_versions_enabled');
  }
  public set updateRunnerVersionsEnabled(value: boolean | cdktf.IResolvable) {
    this._updateRunnerVersionsEnabled = value;
  }
  public resetUpdateRunnerVersionsEnabled() {
    this._updateRunnerVersionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRunnerVersionsEnabledInput() {
    return this._updateRunnerVersionsEnabled;
  }

  // usage_ping_enabled - computed: true, optional: true, required: false
  private _usagePingEnabled?: boolean | cdktf.IResolvable; 
  public get usagePingEnabled() {
    return this.getBooleanAttribute('usage_ping_enabled');
  }
  public set usagePingEnabled(value: boolean | cdktf.IResolvable) {
    this._usagePingEnabled = value;
  }
  public resetUsagePingEnabled() {
    this._usagePingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePingEnabledInput() {
    return this._usagePingEnabled;
  }

  // use_clickhouse_for_analytics - computed: true, optional: true, required: false
  private _useClickhouseForAnalytics?: boolean | cdktf.IResolvable; 
  public get useClickhouseForAnalytics() {
    return this.getBooleanAttribute('use_clickhouse_for_analytics');
  }
  public set useClickhouseForAnalytics(value: boolean | cdktf.IResolvable) {
    this._useClickhouseForAnalytics = value;
  }
  public resetUseClickhouseForAnalytics() {
    this._useClickhouseForAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClickhouseForAnalyticsInput() {
    return this._useClickhouseForAnalytics;
  }

  // user_deactivation_emails_enabled - computed: true, optional: true, required: false
  private _userDeactivationEmailsEnabled?: boolean | cdktf.IResolvable; 
  public get userDeactivationEmailsEnabled() {
    return this.getBooleanAttribute('user_deactivation_emails_enabled');
  }
  public set userDeactivationEmailsEnabled(value: boolean | cdktf.IResolvable) {
    this._userDeactivationEmailsEnabled = value;
  }
  public resetUserDeactivationEmailsEnabled() {
    this._userDeactivationEmailsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeactivationEmailsEnabledInput() {
    return this._userDeactivationEmailsEnabled;
  }

  // user_default_external - computed: true, optional: true, required: false
  private _userDefaultExternal?: boolean | cdktf.IResolvable; 
  public get userDefaultExternal() {
    return this.getBooleanAttribute('user_default_external');
  }
  public set userDefaultExternal(value: boolean | cdktf.IResolvable) {
    this._userDefaultExternal = value;
  }
  public resetUserDefaultExternal() {
    this._userDefaultExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefaultExternalInput() {
    return this._userDefaultExternal;
  }

  // user_default_internal_regex - computed: true, optional: true, required: false
  private _userDefaultInternalRegex?: string; 
  public get userDefaultInternalRegex() {
    return this.getStringAttribute('user_default_internal_regex');
  }
  public set userDefaultInternalRegex(value: string) {
    this._userDefaultInternalRegex = value;
  }
  public resetUserDefaultInternalRegex() {
    this._userDefaultInternalRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefaultInternalRegexInput() {
    return this._userDefaultInternalRegex;
  }

  // user_defaults_to_private_profile - computed: true, optional: true, required: false
  private _userDefaultsToPrivateProfile?: boolean | cdktf.IResolvable; 
  public get userDefaultsToPrivateProfile() {
    return this.getBooleanAttribute('user_defaults_to_private_profile');
  }
  public set userDefaultsToPrivateProfile(value: boolean | cdktf.IResolvable) {
    this._userDefaultsToPrivateProfile = value;
  }
  public resetUserDefaultsToPrivateProfile() {
    this._userDefaultsToPrivateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefaultsToPrivateProfileInput() {
    return this._userDefaultsToPrivateProfile;
  }

  // user_oauth_applications - computed: true, optional: true, required: false
  private _userOauthApplications?: boolean | cdktf.IResolvable; 
  public get userOauthApplications() {
    return this.getBooleanAttribute('user_oauth_applications');
  }
  public set userOauthApplications(value: boolean | cdktf.IResolvable) {
    this._userOauthApplications = value;
  }
  public resetUserOauthApplications() {
    this._userOauthApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOauthApplicationsInput() {
    return this._userOauthApplications;
  }

  // user_show_add_ssh_key_message - computed: true, optional: true, required: false
  private _userShowAddSshKeyMessage?: boolean | cdktf.IResolvable; 
  public get userShowAddSshKeyMessage() {
    return this.getBooleanAttribute('user_show_add_ssh_key_message');
  }
  public set userShowAddSshKeyMessage(value: boolean | cdktf.IResolvable) {
    this._userShowAddSshKeyMessage = value;
  }
  public resetUserShowAddSshKeyMessage() {
    this._userShowAddSshKeyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userShowAddSshKeyMessageInput() {
    return this._userShowAddSshKeyMessage;
  }

  // valid_runner_registrars - computed: true, optional: true, required: false
  private _validRunnerRegistrars?: string[]; 
  public get validRunnerRegistrars() {
    return this.getListAttribute('valid_runner_registrars');
  }
  public set validRunnerRegistrars(value: string[]) {
    this._validRunnerRegistrars = value;
  }
  public resetValidRunnerRegistrars() {
    this._validRunnerRegistrars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validRunnerRegistrarsInput() {
    return this._validRunnerRegistrars;
  }

  // version_check_enabled - computed: true, optional: true, required: false
  private _versionCheckEnabled?: boolean | cdktf.IResolvable; 
  public get versionCheckEnabled() {
    return this.getBooleanAttribute('version_check_enabled');
  }
  public set versionCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._versionCheckEnabled = value;
  }
  public resetVersionCheckEnabled() {
    this._versionCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCheckEnabledInput() {
    return this._versionCheckEnabled;
  }

  // web_ide_clientside_preview_enabled - computed: true, optional: true, required: false
  private _webIdeClientsidePreviewEnabled?: boolean | cdktf.IResolvable; 
  public get webIdeClientsidePreviewEnabled() {
    return this.getBooleanAttribute('web_ide_clientside_preview_enabled');
  }
  public set webIdeClientsidePreviewEnabled(value: boolean | cdktf.IResolvable) {
    this._webIdeClientsidePreviewEnabled = value;
  }
  public resetWebIdeClientsidePreviewEnabled() {
    this._webIdeClientsidePreviewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webIdeClientsidePreviewEnabledInput() {
    return this._webIdeClientsidePreviewEnabled;
  }

  // whats_new_variant - computed: true, optional: true, required: false
  private _whatsNewVariant?: string; 
  public get whatsNewVariant() {
    return this.getStringAttribute('whats_new_variant');
  }
  public set whatsNewVariant(value: string) {
    this._whatsNewVariant = value;
  }
  public resetWhatsNewVariant() {
    this._whatsNewVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whatsNewVariantInput() {
    return this._whatsNewVariant;
  }

  // wiki_page_max_content_bytes - computed: true, optional: true, required: false
  private _wikiPageMaxContentBytes?: number; 
  public get wikiPageMaxContentBytes() {
    return this.getNumberAttribute('wiki_page_max_content_bytes');
  }
  public set wikiPageMaxContentBytes(value: number) {
    this._wikiPageMaxContentBytes = value;
  }
  public resetWikiPageMaxContentBytes() {
    this._wikiPageMaxContentBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wikiPageMaxContentBytesInput() {
    return this._wikiPageMaxContentBytes;
  }

  // default_branch_protection_defaults - computed: false, optional: true, required: false
  private _defaultBranchProtectionDefaults = new ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference(this, "default_branch_protection_defaults");
  public get defaultBranchProtectionDefaults() {
    return this._defaultBranchProtectionDefaults;
  }
  public putDefaultBranchProtectionDefaults(value: ApplicationSettingsDefaultBranchProtectionDefaults) {
    this._defaultBranchProtectionDefaults.internalValue = value;
  }
  public resetDefaultBranchProtectionDefaults() {
    this._defaultBranchProtectionDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchProtectionDefaultsInput() {
    return this._defaultBranchProtectionDefaults.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abuse_notification_email: cdktf.stringToTerraform(this._abuseNotificationEmail),
      admin_mode: cdktf.booleanToTerraform(this._adminMode),
      after_sign_out_path: cdktf.stringToTerraform(this._afterSignOutPath),
      after_sign_up_text: cdktf.stringToTerraform(this._afterSignUpText),
      akismet_api_key: cdktf.stringToTerraform(this._akismetApiKey),
      akismet_enabled: cdktf.booleanToTerraform(this._akismetEnabled),
      allow_account_deletion: cdktf.booleanToTerraform(this._allowAccountDeletion),
      allow_group_owners_to_manage_ldap: cdktf.booleanToTerraform(this._allowGroupOwnersToManageLdap),
      allow_local_requests_from_system_hooks: cdktf.booleanToTerraform(this._allowLocalRequestsFromSystemHooks),
      allow_local_requests_from_web_hooks_and_services: cdktf.booleanToTerraform(this._allowLocalRequestsFromWebHooksAndServices),
      allow_project_creation_for_guest_and_below: cdktf.booleanToTerraform(this._allowProjectCreationForGuestAndBelow),
      allow_runner_registration_token: cdktf.booleanToTerraform(this._allowRunnerRegistrationToken),
      archive_builds_in_human_readable: cdktf.stringToTerraform(this._archiveBuildsInHumanReadable),
      asciidoc_max_includes: cdktf.numberToTerraform(this._asciidocMaxIncludes),
      asset_proxy_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetProxyAllowlist),
      asset_proxy_enabled: cdktf.booleanToTerraform(this._assetProxyEnabled),
      asset_proxy_secret_key: cdktf.stringToTerraform(this._assetProxySecretKey),
      asset_proxy_url: cdktf.stringToTerraform(this._assetProxyUrl),
      authorized_keys_enabled: cdktf.booleanToTerraform(this._authorizedKeysEnabled),
      auto_ban_user_on_excessive_projects_download: cdktf.booleanToTerraform(this._autoBanUserOnExcessiveProjectsDownload),
      auto_devops_domain: cdktf.stringToTerraform(this._autoDevopsDomain),
      auto_devops_enabled: cdktf.booleanToTerraform(this._autoDevopsEnabled),
      automatic_purchased_storage_allocation: cdktf.booleanToTerraform(this._automaticPurchasedStorageAllocation),
      bulk_import_concurrent_pipeline_batch_limit: cdktf.numberToTerraform(this._bulkImportConcurrentPipelineBatchLimit),
      bulk_import_enabled: cdktf.booleanToTerraform(this._bulkImportEnabled),
      bulk_import_max_download_file_size: cdktf.numberToTerraform(this._bulkImportMaxDownloadFileSize),
      can_create_group: cdktf.booleanToTerraform(this._canCreateGroup),
      check_namespace_plan: cdktf.booleanToTerraform(this._checkNamespacePlan),
      ci_max_includes: cdktf.numberToTerraform(this._ciMaxIncludes),
      ci_max_total_yaml_size_bytes: cdktf.numberToTerraform(this._ciMaxTotalYamlSizeBytes),
      commit_email_hostname: cdktf.stringToTerraform(this._commitEmailHostname),
      concurrent_bitbucket_import_jobs_limit: cdktf.numberToTerraform(this._concurrentBitbucketImportJobsLimit),
      concurrent_bitbucket_server_import_jobs_limit: cdktf.numberToTerraform(this._concurrentBitbucketServerImportJobsLimit),
      concurrent_github_import_jobs_limit: cdktf.numberToTerraform(this._concurrentGithubImportJobsLimit),
      container_expiration_policies_enable_historic_entries: cdktf.booleanToTerraform(this._containerExpirationPoliciesEnableHistoricEntries),
      container_registry_cleanup_tags_service_max_list_size: cdktf.numberToTerraform(this._containerRegistryCleanupTagsServiceMaxListSize),
      container_registry_delete_tags_service_timeout: cdktf.numberToTerraform(this._containerRegistryDeleteTagsServiceTimeout),
      container_registry_expiration_policies_caching: cdktf.booleanToTerraform(this._containerRegistryExpirationPoliciesCaching),
      container_registry_expiration_policies_worker_capacity: cdktf.numberToTerraform(this._containerRegistryExpirationPoliciesWorkerCapacity),
      container_registry_token_expire_delay: cdktf.numberToTerraform(this._containerRegistryTokenExpireDelay),
      deactivate_dormant_users: cdktf.booleanToTerraform(this._deactivateDormantUsers),
      deactivate_dormant_users_period: cdktf.numberToTerraform(this._deactivateDormantUsersPeriod),
      decompress_archive_file_timeout: cdktf.numberToTerraform(this._decompressArchiveFileTimeout),
      default_artifacts_expire_in: cdktf.stringToTerraform(this._defaultArtifactsExpireIn),
      default_branch_name: cdktf.stringToTerraform(this._defaultBranchName),
      default_branch_protection: cdktf.numberToTerraform(this._defaultBranchProtection),
      default_ci_config_path: cdktf.stringToTerraform(this._defaultCiConfigPath),
      default_group_visibility: cdktf.stringToTerraform(this._defaultGroupVisibility),
      default_preferred_language: cdktf.stringToTerraform(this._defaultPreferredLanguage),
      default_project_creation: cdktf.numberToTerraform(this._defaultProjectCreation),
      default_project_visibility: cdktf.stringToTerraform(this._defaultProjectVisibility),
      default_projects_limit: cdktf.numberToTerraform(this._defaultProjectsLimit),
      default_snippet_visibility: cdktf.stringToTerraform(this._defaultSnippetVisibility),
      default_syntax_highlighting_theme: cdktf.numberToTerraform(this._defaultSyntaxHighlightingTheme),
      delete_inactive_projects: cdktf.booleanToTerraform(this._deleteInactiveProjects),
      delete_unconfirmed_users: cdktf.booleanToTerraform(this._deleteUnconfirmedUsers),
      deletion_adjourned_period: cdktf.numberToTerraform(this._deletionAdjournedPeriod),
      diagramsnet_enabled: cdktf.booleanToTerraform(this._diagramsnetEnabled),
      diagramsnet_url: cdktf.stringToTerraform(this._diagramsnetUrl),
      diff_max_files: cdktf.numberToTerraform(this._diffMaxFiles),
      diff_max_lines: cdktf.numberToTerraform(this._diffMaxLines),
      diff_max_patch_bytes: cdktf.numberToTerraform(this._diffMaxPatchBytes),
      disable_admin_oauth_scopes: cdktf.booleanToTerraform(this._disableAdminOauthScopes),
      disable_feed_token: cdktf.booleanToTerraform(this._disableFeedToken),
      disable_personal_access_tokens: cdktf.booleanToTerraform(this._disablePersonalAccessTokens),
      disabled_oauth_sign_in_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledOauthSignInSources),
      dns_rebinding_protection_enabled: cdktf.booleanToTerraform(this._dnsRebindingProtectionEnabled),
      domain_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainAllowlist),
      domain_denylist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainDenylist),
      domain_denylist_enabled: cdktf.booleanToTerraform(this._domainDenylistEnabled),
      downstream_pipeline_trigger_limit_per_project_user_sha: cdktf.numberToTerraform(this._downstreamPipelineTriggerLimitPerProjectUserSha),
      dsa_key_restriction: cdktf.numberToTerraform(this._dsaKeyRestriction),
      duo_features_enabled: cdktf.booleanToTerraform(this._duoFeaturesEnabled),
      ecdsa_key_restriction: cdktf.numberToTerraform(this._ecdsaKeyRestriction),
      ecdsa_sk_key_restriction: cdktf.numberToTerraform(this._ecdsaSkKeyRestriction),
      ed25519_key_restriction: cdktf.numberToTerraform(this._ed25519KeyRestriction),
      ed25519_sk_key_restriction: cdktf.numberToTerraform(this._ed25519SkKeyRestriction),
      eks_access_key_id: cdktf.stringToTerraform(this._eksAccessKeyId),
      eks_account_id: cdktf.stringToTerraform(this._eksAccountId),
      eks_integration_enabled: cdktf.booleanToTerraform(this._eksIntegrationEnabled),
      eks_secret_access_key: cdktf.stringToTerraform(this._eksSecretAccessKey),
      elasticsearch_aws: cdktf.booleanToTerraform(this._elasticsearchAws),
      elasticsearch_aws_access_key: cdktf.stringToTerraform(this._elasticsearchAwsAccessKey),
      elasticsearch_aws_region: cdktf.stringToTerraform(this._elasticsearchAwsRegion),
      elasticsearch_aws_secret_access_key: cdktf.stringToTerraform(this._elasticsearchAwsSecretAccessKey),
      elasticsearch_indexed_field_length_limit: cdktf.numberToTerraform(this._elasticsearchIndexedFieldLengthLimit),
      elasticsearch_indexed_file_size_limit_kb: cdktf.numberToTerraform(this._elasticsearchIndexedFileSizeLimitKb),
      elasticsearch_indexing: cdktf.booleanToTerraform(this._elasticsearchIndexing),
      elasticsearch_limit_indexing: cdktf.booleanToTerraform(this._elasticsearchLimitIndexing),
      elasticsearch_max_bulk_concurrency: cdktf.numberToTerraform(this._elasticsearchMaxBulkConcurrency),
      elasticsearch_max_bulk_size_mb: cdktf.numberToTerraform(this._elasticsearchMaxBulkSizeMb),
      elasticsearch_max_code_indexing_concurrency: cdktf.numberToTerraform(this._elasticsearchMaxCodeIndexingConcurrency),
      elasticsearch_namespace_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._elasticsearchNamespaceIds),
      elasticsearch_password: cdktf.stringToTerraform(this._elasticsearchPassword),
      elasticsearch_project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._elasticsearchProjectIds),
      elasticsearch_requeue_workers: cdktf.booleanToTerraform(this._elasticsearchRequeueWorkers),
      elasticsearch_search: cdktf.booleanToTerraform(this._elasticsearchSearch),
      elasticsearch_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._elasticsearchUrl),
      elasticsearch_username: cdktf.stringToTerraform(this._elasticsearchUsername),
      elasticsearch_worker_number_of_shards: cdktf.numberToTerraform(this._elasticsearchWorkerNumberOfShards),
      email_additional_text: cdktf.stringToTerraform(this._emailAdditionalText),
      email_author_in_body: cdktf.booleanToTerraform(this._emailAuthorInBody),
      email_confirmation_setting: cdktf.stringToTerraform(this._emailConfirmationSetting),
      enable_artifact_external_redirect_warning_page: cdktf.booleanToTerraform(this._enableArtifactExternalRedirectWarningPage),
      enabled_git_access_protocol: cdktf.stringToTerraform(this._enabledGitAccessProtocol),
      enforce_namespace_storage_limit: cdktf.booleanToTerraform(this._enforceNamespaceStorageLimit),
      enforce_terms: cdktf.booleanToTerraform(this._enforceTerms),
      external_auth_client_cert: cdktf.stringToTerraform(this._externalAuthClientCert),
      external_auth_client_key: cdktf.stringToTerraform(this._externalAuthClientKey),
      external_auth_client_key_pass: cdktf.stringToTerraform(this._externalAuthClientKeyPass),
      external_authorization_service_default_label: cdktf.stringToTerraform(this._externalAuthorizationServiceDefaultLabel),
      external_authorization_service_enabled: cdktf.booleanToTerraform(this._externalAuthorizationServiceEnabled),
      external_authorization_service_timeout: cdktf.numberToTerraform(this._externalAuthorizationServiceTimeout),
      external_authorization_service_url: cdktf.stringToTerraform(this._externalAuthorizationServiceUrl),
      external_pipeline_validation_service_timeout: cdktf.numberToTerraform(this._externalPipelineValidationServiceTimeout),
      external_pipeline_validation_service_token: cdktf.stringToTerraform(this._externalPipelineValidationServiceToken),
      external_pipeline_validation_service_url: cdktf.stringToTerraform(this._externalPipelineValidationServiceUrl),
      failed_login_attempts_unlock_period_in_minutes: cdktf.numberToTerraform(this._failedLoginAttemptsUnlockPeriodInMinutes),
      file_template_project_id: cdktf.numberToTerraform(this._fileTemplateProjectId),
      first_day_of_week: cdktf.numberToTerraform(this._firstDayOfWeek),
      geo_node_allowed_ips: cdktf.stringToTerraform(this._geoNodeAllowedIps),
      geo_status_timeout: cdktf.numberToTerraform(this._geoStatusTimeout),
      git_rate_limit_users_alertlist: cdktf.listMapper(cdktf.numberToTerraform, false)(this._gitRateLimitUsersAlertlist),
      git_rate_limit_users_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gitRateLimitUsersAllowlist),
      git_two_factor_session_expiry: cdktf.numberToTerraform(this._gitTwoFactorSessionExpiry),
      gitaly_timeout_default: cdktf.numberToTerraform(this._gitalyTimeoutDefault),
      gitaly_timeout_fast: cdktf.numberToTerraform(this._gitalyTimeoutFast),
      gitaly_timeout_medium: cdktf.numberToTerraform(this._gitalyTimeoutMedium),
      gitlab_shell_operation_limit: cdktf.numberToTerraform(this._gitlabShellOperationLimit),
      gitpod_enabled: cdktf.booleanToTerraform(this._gitpodEnabled),
      gitpod_url: cdktf.stringToTerraform(this._gitpodUrl),
      globally_allowed_ips: cdktf.stringToTerraform(this._globallyAllowedIps),
      grafana_enabled: cdktf.booleanToTerraform(this._grafanaEnabled),
      grafana_url: cdktf.stringToTerraform(this._grafanaUrl),
      gravatar_enabled: cdktf.booleanToTerraform(this._gravatarEnabled),
      group_owners_can_manage_default_branch_protection: cdktf.booleanToTerraform(this._groupOwnersCanManageDefaultBranchProtection),
      help_page_hide_commercial_content: cdktf.booleanToTerraform(this._helpPageHideCommercialContent),
      help_page_support_url: cdktf.stringToTerraform(this._helpPageSupportUrl),
      help_page_text: cdktf.stringToTerraform(this._helpPageText),
      help_text: cdktf.stringToTerraform(this._helpText),
      hide_third_party_offers: cdktf.booleanToTerraform(this._hideThirdPartyOffers),
      home_page_url: cdktf.stringToTerraform(this._homePageUrl),
      housekeeping_enabled: cdktf.booleanToTerraform(this._housekeepingEnabled),
      housekeeping_optimize_repository_period: cdktf.numberToTerraform(this._housekeepingOptimizeRepositoryPeriod),
      html_emails_enabled: cdktf.booleanToTerraform(this._htmlEmailsEnabled),
      id: cdktf.stringToTerraform(this._id),
      import_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importSources),
      in_product_marketing_emails_enabled: cdktf.booleanToTerraform(this._inProductMarketingEmailsEnabled),
      inactive_projects_delete_after_months: cdktf.numberToTerraform(this._inactiveProjectsDeleteAfterMonths),
      inactive_projects_min_size_mb: cdktf.numberToTerraform(this._inactiveProjectsMinSizeMb),
      inactive_projects_send_warning_email_after_months: cdktf.numberToTerraform(this._inactiveProjectsSendWarningEmailAfterMonths),
      include_optional_metrics_in_service_ping: cdktf.booleanToTerraform(this._includeOptionalMetricsInServicePing),
      invisible_captcha_enabled: cdktf.booleanToTerraform(this._invisibleCaptchaEnabled),
      issues_create_limit: cdktf.numberToTerraform(this._issuesCreateLimit),
      jira_connect_application_key: cdktf.stringToTerraform(this._jiraConnectApplicationKey),
      jira_connect_proxy_url: cdktf.stringToTerraform(this._jiraConnectProxyUrl),
      jira_connect_public_key_storage_enabled: cdktf.booleanToTerraform(this._jiraConnectPublicKeyStorageEnabled),
      keep_latest_artifact: cdktf.booleanToTerraform(this._keepLatestArtifact),
      local_markdown_version: cdktf.numberToTerraform(this._localMarkdownVersion),
      lock_duo_features_enabled: cdktf.booleanToTerraform(this._lockDuoFeaturesEnabled),
      lock_memberships_to_ldap: cdktf.booleanToTerraform(this._lockMembershipsToLdap),
      mailgun_events_enabled: cdktf.booleanToTerraform(this._mailgunEventsEnabled),
      mailgun_signing_key: cdktf.stringToTerraform(this._mailgunSigningKey),
      maintenance_mode: cdktf.booleanToTerraform(this._maintenanceMode),
      maintenance_mode_message: cdktf.stringToTerraform(this._maintenanceModeMessage),
      maven_package_requests_forwarding: cdktf.booleanToTerraform(this._mavenPackageRequestsForwarding),
      max_artifacts_size: cdktf.numberToTerraform(this._maxArtifactsSize),
      max_attachment_size: cdktf.numberToTerraform(this._maxAttachmentSize),
      max_decompressed_archive_size: cdktf.numberToTerraform(this._maxDecompressedArchiveSize),
      max_export_size: cdktf.numberToTerraform(this._maxExportSize),
      max_import_remote_file_size: cdktf.numberToTerraform(this._maxImportRemoteFileSize),
      max_import_size: cdktf.numberToTerraform(this._maxImportSize),
      max_login_attempts: cdktf.numberToTerraform(this._maxLoginAttempts),
      max_number_of_repository_downloads: cdktf.numberToTerraform(this._maxNumberOfRepositoryDownloads),
      max_number_of_repository_downloads_within_time_period: cdktf.numberToTerraform(this._maxNumberOfRepositoryDownloadsWithinTimePeriod),
      max_pages_size: cdktf.numberToTerraform(this._maxPagesSize),
      max_personal_access_token_lifetime: cdktf.numberToTerraform(this._maxPersonalAccessTokenLifetime),
      max_ssh_key_lifetime: cdktf.numberToTerraform(this._maxSshKeyLifetime),
      max_terraform_state_size_bytes: cdktf.numberToTerraform(this._maxTerraformStateSizeBytes),
      metrics_method_call_threshold: cdktf.numberToTerraform(this._metricsMethodCallThreshold),
      minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
      mirror_available: cdktf.booleanToTerraform(this._mirrorAvailable),
      mirror_capacity_threshold: cdktf.numberToTerraform(this._mirrorCapacityThreshold),
      mirror_max_capacity: cdktf.numberToTerraform(this._mirrorMaxCapacity),
      mirror_max_delay: cdktf.numberToTerraform(this._mirrorMaxDelay),
      npm_package_requests_forwarding: cdktf.booleanToTerraform(this._npmPackageRequestsForwarding),
      nuget_skip_metadata_url_validation: cdktf.booleanToTerraform(this._nugetSkipMetadataUrlValidation),
      outbound_local_requests_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outboundLocalRequestsWhitelist),
      package_metadata_purl_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._packageMetadataPurlTypes),
      package_registry_allow_anyone_to_pull_option: cdktf.booleanToTerraform(this._packageRegistryAllowAnyoneToPullOption),
      package_registry_cleanup_policies_worker_capacity: cdktf.numberToTerraform(this._packageRegistryCleanupPoliciesWorkerCapacity),
      pages_domain_verification_enabled: cdktf.booleanToTerraform(this._pagesDomainVerificationEnabled),
      password_authentication_enabled_for_git: cdktf.booleanToTerraform(this._passwordAuthenticationEnabledForGit),
      password_authentication_enabled_for_web: cdktf.booleanToTerraform(this._passwordAuthenticationEnabledForWeb),
      password_lowercase_required: cdktf.booleanToTerraform(this._passwordLowercaseRequired),
      password_number_required: cdktf.booleanToTerraform(this._passwordNumberRequired),
      password_symbol_required: cdktf.booleanToTerraform(this._passwordSymbolRequired),
      password_uppercase_required: cdktf.booleanToTerraform(this._passwordUppercaseRequired),
      performance_bar_allowed_group_path: cdktf.stringToTerraform(this._performanceBarAllowedGroupPath),
      personal_access_token_prefix: cdktf.stringToTerraform(this._personalAccessTokenPrefix),
      pipeline_limit_per_project_user_sha: cdktf.numberToTerraform(this._pipelineLimitPerProjectUserSha),
      plantuml_enabled: cdktf.booleanToTerraform(this._plantumlEnabled),
      plantuml_url: cdktf.stringToTerraform(this._plantumlUrl),
      polling_interval_multiplier: cdktf.numberToTerraform(this._pollingIntervalMultiplier),
      project_export_enabled: cdktf.booleanToTerraform(this._projectExportEnabled),
      project_jobs_api_rate_limit: cdktf.numberToTerraform(this._projectJobsApiRateLimit),
      projects_api_rate_limit_unauthenticated: cdktf.numberToTerraform(this._projectsApiRateLimitUnauthenticated),
      prometheus_metrics_enabled: cdktf.booleanToTerraform(this._prometheusMetricsEnabled),
      protected_ci_variables: cdktf.booleanToTerraform(this._protectedCiVariables),
      push_event_activities_limit: cdktf.numberToTerraform(this._pushEventActivitiesLimit),
      push_event_hooks_limit: cdktf.numberToTerraform(this._pushEventHooksLimit),
      pypi_package_requests_forwarding: cdktf.booleanToTerraform(this._pypiPackageRequestsForwarding),
      rate_limiting_response_text: cdktf.stringToTerraform(this._rateLimitingResponseText),
      raw_blob_request_limit: cdktf.numberToTerraform(this._rawBlobRequestLimit),
      recaptcha_enabled: cdktf.booleanToTerraform(this._recaptchaEnabled),
      recaptcha_private_key: cdktf.stringToTerraform(this._recaptchaPrivateKey),
      recaptcha_site_key: cdktf.stringToTerraform(this._recaptchaSiteKey),
      receive_max_input_size: cdktf.numberToTerraform(this._receiveMaxInputSize),
      receptive_cluster_agents_enabled: cdktf.booleanToTerraform(this._receptiveClusterAgentsEnabled),
      remember_me_enabled: cdktf.booleanToTerraform(this._rememberMeEnabled),
      repository_checks_enabled: cdktf.booleanToTerraform(this._repositoryChecksEnabled),
      repository_size_limit: cdktf.numberToTerraform(this._repositorySizeLimit),
      repository_storages_weighted: cdktf.hashMapper(cdktf.numberToTerraform)(this._repositoryStoragesWeighted),
      require_admin_approval_after_user_signup: cdktf.booleanToTerraform(this._requireAdminApprovalAfterUserSignup),
      require_admin_two_factor_authentication: cdktf.booleanToTerraform(this._requireAdminTwoFactorAuthentication),
      require_personal_access_token_expiry: cdktf.booleanToTerraform(this._requirePersonalAccessTokenExpiry),
      require_two_factor_authentication: cdktf.booleanToTerraform(this._requireTwoFactorAuthentication),
      restricted_visibility_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedVisibilityLevels),
      rsa_key_restriction: cdktf.numberToTerraform(this._rsaKeyRestriction),
      search_rate_limit: cdktf.numberToTerraform(this._searchRateLimit),
      search_rate_limit_unauthenticated: cdktf.numberToTerraform(this._searchRateLimitUnauthenticated),
      security_approval_policies_limit: cdktf.numberToTerraform(this._securityApprovalPoliciesLimit),
      security_policy_global_group_approvers_enabled: cdktf.booleanToTerraform(this._securityPolicyGlobalGroupApproversEnabled),
      security_txt_content: cdktf.stringToTerraform(this._securityTxtContent),
      send_user_confirmation_email: cdktf.booleanToTerraform(this._sendUserConfirmationEmail),
      service_access_tokens_expiration_enforced: cdktf.booleanToTerraform(this._serviceAccessTokensExpirationEnforced),
      session_expire_delay: cdktf.numberToTerraform(this._sessionExpireDelay),
      shared_runners_enabled: cdktf.booleanToTerraform(this._sharedRunnersEnabled),
      shared_runners_minutes: cdktf.numberToTerraform(this._sharedRunnersMinutes),
      shared_runners_text: cdktf.stringToTerraform(this._sharedRunnersText),
      sidekiq_job_limiter_compression_threshold_bytes: cdktf.numberToTerraform(this._sidekiqJobLimiterCompressionThresholdBytes),
      sidekiq_job_limiter_limit_bytes: cdktf.numberToTerraform(this._sidekiqJobLimiterLimitBytes),
      sidekiq_job_limiter_mode: cdktf.stringToTerraform(this._sidekiqJobLimiterMode),
      sign_in_text: cdktf.stringToTerraform(this._signInText),
      signup_enabled: cdktf.booleanToTerraform(this._signupEnabled),
      silent_admin_exports_enabled: cdktf.booleanToTerraform(this._silentAdminExportsEnabled),
      silent_mode_enabled: cdktf.booleanToTerraform(this._silentModeEnabled),
      slack_app_enabled: cdktf.booleanToTerraform(this._slackAppEnabled),
      slack_app_id: cdktf.stringToTerraform(this._slackAppId),
      slack_app_secret: cdktf.stringToTerraform(this._slackAppSecret),
      slack_app_signing_secret: cdktf.stringToTerraform(this._slackAppSigningSecret),
      slack_app_verification_token: cdktf.stringToTerraform(this._slackAppVerificationToken),
      snippet_size_limit: cdktf.numberToTerraform(this._snippetSizeLimit),
      snowplow_app_id: cdktf.stringToTerraform(this._snowplowAppId),
      snowplow_collector_hostname: cdktf.stringToTerraform(this._snowplowCollectorHostname),
      snowplow_cookie_domain: cdktf.stringToTerraform(this._snowplowCookieDomain),
      snowplow_database_collector_hostname: cdktf.stringToTerraform(this._snowplowDatabaseCollectorHostname),
      snowplow_enabled: cdktf.booleanToTerraform(this._snowplowEnabled),
      sourcegraph_enabled: cdktf.booleanToTerraform(this._sourcegraphEnabled),
      sourcegraph_public_only: cdktf.booleanToTerraform(this._sourcegraphPublicOnly),
      sourcegraph_url: cdktf.stringToTerraform(this._sourcegraphUrl),
      spam_check_api_key: cdktf.stringToTerraform(this._spamCheckApiKey),
      spam_check_endpoint_enabled: cdktf.booleanToTerraform(this._spamCheckEndpointEnabled),
      spam_check_endpoint_url: cdktf.stringToTerraform(this._spamCheckEndpointUrl),
      static_objects_external_storage_auth_token: cdktf.stringToTerraform(this._staticObjectsExternalStorageAuthToken),
      static_objects_external_storage_url: cdktf.stringToTerraform(this._staticObjectsExternalStorageUrl),
      suggest_pipeline_enabled: cdktf.booleanToTerraform(this._suggestPipelineEnabled),
      terminal_max_session_time: cdktf.numberToTerraform(this._terminalMaxSessionTime),
      terms: cdktf.stringToTerraform(this._terms),
      throttle_authenticated_api_enabled: cdktf.booleanToTerraform(this._throttleAuthenticatedApiEnabled),
      throttle_authenticated_api_period_in_seconds: cdktf.numberToTerraform(this._throttleAuthenticatedApiPeriodInSeconds),
      throttle_authenticated_api_requests_per_period: cdktf.numberToTerraform(this._throttleAuthenticatedApiRequestsPerPeriod),
      throttle_authenticated_packages_api_enabled: cdktf.booleanToTerraform(this._throttleAuthenticatedPackagesApiEnabled),
      throttle_authenticated_packages_api_period_in_seconds: cdktf.numberToTerraform(this._throttleAuthenticatedPackagesApiPeriodInSeconds),
      throttle_authenticated_packages_api_requests_per_period: cdktf.numberToTerraform(this._throttleAuthenticatedPackagesApiRequestsPerPeriod),
      throttle_authenticated_web_enabled: cdktf.booleanToTerraform(this._throttleAuthenticatedWebEnabled),
      throttle_authenticated_web_period_in_seconds: cdktf.numberToTerraform(this._throttleAuthenticatedWebPeriodInSeconds),
      throttle_authenticated_web_requests_per_period: cdktf.numberToTerraform(this._throttleAuthenticatedWebRequestsPerPeriod),
      throttle_unauthenticated_api_enabled: cdktf.booleanToTerraform(this._throttleUnauthenticatedApiEnabled),
      throttle_unauthenticated_api_period_in_seconds: cdktf.numberToTerraform(this._throttleUnauthenticatedApiPeriodInSeconds),
      throttle_unauthenticated_api_requests_per_period: cdktf.numberToTerraform(this._throttleUnauthenticatedApiRequestsPerPeriod),
      throttle_unauthenticated_packages_api_enabled: cdktf.booleanToTerraform(this._throttleUnauthenticatedPackagesApiEnabled),
      throttle_unauthenticated_packages_api_period_in_seconds: cdktf.numberToTerraform(this._throttleUnauthenticatedPackagesApiPeriodInSeconds),
      throttle_unauthenticated_packages_api_requests_per_period: cdktf.numberToTerraform(this._throttleUnauthenticatedPackagesApiRequestsPerPeriod),
      throttle_unauthenticated_web_enabled: cdktf.booleanToTerraform(this._throttleUnauthenticatedWebEnabled),
      throttle_unauthenticated_web_period_in_seconds: cdktf.numberToTerraform(this._throttleUnauthenticatedWebPeriodInSeconds),
      throttle_unauthenticated_web_requests_per_period: cdktf.numberToTerraform(this._throttleUnauthenticatedWebRequestsPerPeriod),
      time_tracking_limit_to_hours: cdktf.booleanToTerraform(this._timeTrackingLimitToHours),
      two_factor_grace_period: cdktf.numberToTerraform(this._twoFactorGracePeriod),
      unconfirmed_users_delete_after_days: cdktf.numberToTerraform(this._unconfirmedUsersDeleteAfterDays),
      unique_ips_limit_enabled: cdktf.booleanToTerraform(this._uniqueIpsLimitEnabled),
      unique_ips_limit_per_user: cdktf.numberToTerraform(this._uniqueIpsLimitPerUser),
      unique_ips_limit_time_window: cdktf.numberToTerraform(this._uniqueIpsLimitTimeWindow),
      update_runner_versions_enabled: cdktf.booleanToTerraform(this._updateRunnerVersionsEnabled),
      usage_ping_enabled: cdktf.booleanToTerraform(this._usagePingEnabled),
      use_clickhouse_for_analytics: cdktf.booleanToTerraform(this._useClickhouseForAnalytics),
      user_deactivation_emails_enabled: cdktf.booleanToTerraform(this._userDeactivationEmailsEnabled),
      user_default_external: cdktf.booleanToTerraform(this._userDefaultExternal),
      user_default_internal_regex: cdktf.stringToTerraform(this._userDefaultInternalRegex),
      user_defaults_to_private_profile: cdktf.booleanToTerraform(this._userDefaultsToPrivateProfile),
      user_oauth_applications: cdktf.booleanToTerraform(this._userOauthApplications),
      user_show_add_ssh_key_message: cdktf.booleanToTerraform(this._userShowAddSshKeyMessage),
      valid_runner_registrars: cdktf.listMapper(cdktf.stringToTerraform, false)(this._validRunnerRegistrars),
      version_check_enabled: cdktf.booleanToTerraform(this._versionCheckEnabled),
      web_ide_clientside_preview_enabled: cdktf.booleanToTerraform(this._webIdeClientsidePreviewEnabled),
      whats_new_variant: cdktf.stringToTerraform(this._whatsNewVariant),
      wiki_page_max_content_bytes: cdktf.numberToTerraform(this._wikiPageMaxContentBytes),
      default_branch_protection_defaults: applicationSettingsDefaultBranchProtectionDefaultsToTerraform(this._defaultBranchProtectionDefaults.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abuse_notification_email: {
        value: cdktf.stringToHclTerraform(this._abuseNotificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_mode: {
        value: cdktf.booleanToHclTerraform(this._adminMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      after_sign_out_path: {
        value: cdktf.stringToHclTerraform(this._afterSignOutPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      after_sign_up_text: {
        value: cdktf.stringToHclTerraform(this._afterSignUpText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      akismet_api_key: {
        value: cdktf.stringToHclTerraform(this._akismetApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      akismet_enabled: {
        value: cdktf.booleanToHclTerraform(this._akismetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_account_deletion: {
        value: cdktf.booleanToHclTerraform(this._allowAccountDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_group_owners_to_manage_ldap: {
        value: cdktf.booleanToHclTerraform(this._allowGroupOwnersToManageLdap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_local_requests_from_system_hooks: {
        value: cdktf.booleanToHclTerraform(this._allowLocalRequestsFromSystemHooks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_local_requests_from_web_hooks_and_services: {
        value: cdktf.booleanToHclTerraform(this._allowLocalRequestsFromWebHooksAndServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_project_creation_for_guest_and_below: {
        value: cdktf.booleanToHclTerraform(this._allowProjectCreationForGuestAndBelow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_runner_registration_token: {
        value: cdktf.booleanToHclTerraform(this._allowRunnerRegistrationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archive_builds_in_human_readable: {
        value: cdktf.stringToHclTerraform(this._archiveBuildsInHumanReadable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asciidoc_max_includes: {
        value: cdktf.numberToHclTerraform(this._asciidocMaxIncludes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      asset_proxy_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetProxyAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      asset_proxy_enabled: {
        value: cdktf.booleanToHclTerraform(this._assetProxyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      asset_proxy_secret_key: {
        value: cdktf.stringToHclTerraform(this._assetProxySecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_proxy_url: {
        value: cdktf.stringToHclTerraform(this._assetProxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_keys_enabled: {
        value: cdktf.booleanToHclTerraform(this._authorizedKeysEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_ban_user_on_excessive_projects_download: {
        value: cdktf.booleanToHclTerraform(this._autoBanUserOnExcessiveProjectsDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_devops_domain: {
        value: cdktf.stringToHclTerraform(this._autoDevopsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_devops_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoDevopsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automatic_purchased_storage_allocation: {
        value: cdktf.booleanToHclTerraform(this._automaticPurchasedStorageAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bulk_import_concurrent_pipeline_batch_limit: {
        value: cdktf.numberToHclTerraform(this._bulkImportConcurrentPipelineBatchLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bulk_import_enabled: {
        value: cdktf.booleanToHclTerraform(this._bulkImportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bulk_import_max_download_file_size: {
        value: cdktf.numberToHclTerraform(this._bulkImportMaxDownloadFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      can_create_group: {
        value: cdktf.booleanToHclTerraform(this._canCreateGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_namespace_plan: {
        value: cdktf.booleanToHclTerraform(this._checkNamespacePlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ci_max_includes: {
        value: cdktf.numberToHclTerraform(this._ciMaxIncludes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ci_max_total_yaml_size_bytes: {
        value: cdktf.numberToHclTerraform(this._ciMaxTotalYamlSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      commit_email_hostname: {
        value: cdktf.stringToHclTerraform(this._commitEmailHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrent_bitbucket_import_jobs_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentBitbucketImportJobsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_bitbucket_server_import_jobs_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentBitbucketServerImportJobsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_github_import_jobs_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentGithubImportJobsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container_expiration_policies_enable_historic_entries: {
        value: cdktf.booleanToHclTerraform(this._containerExpirationPoliciesEnableHistoricEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_registry_cleanup_tags_service_max_list_size: {
        value: cdktf.numberToHclTerraform(this._containerRegistryCleanupTagsServiceMaxListSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container_registry_delete_tags_service_timeout: {
        value: cdktf.numberToHclTerraform(this._containerRegistryDeleteTagsServiceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container_registry_expiration_policies_caching: {
        value: cdktf.booleanToHclTerraform(this._containerRegistryExpirationPoliciesCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_registry_expiration_policies_worker_capacity: {
        value: cdktf.numberToHclTerraform(this._containerRegistryExpirationPoliciesWorkerCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container_registry_token_expire_delay: {
        value: cdktf.numberToHclTerraform(this._containerRegistryTokenExpireDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deactivate_dormant_users: {
        value: cdktf.booleanToHclTerraform(this._deactivateDormantUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deactivate_dormant_users_period: {
        value: cdktf.numberToHclTerraform(this._deactivateDormantUsersPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decompress_archive_file_timeout: {
        value: cdktf.numberToHclTerraform(this._decompressArchiveFileTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_artifacts_expire_in: {
        value: cdktf.stringToHclTerraform(this._defaultArtifactsExpireIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_branch_name: {
        value: cdktf.stringToHclTerraform(this._defaultBranchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_branch_protection: {
        value: cdktf.numberToHclTerraform(this._defaultBranchProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_ci_config_path: {
        value: cdktf.stringToHclTerraform(this._defaultCiConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_group_visibility: {
        value: cdktf.stringToHclTerraform(this._defaultGroupVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_preferred_language: {
        value: cdktf.stringToHclTerraform(this._defaultPreferredLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_project_creation: {
        value: cdktf.numberToHclTerraform(this._defaultProjectCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_project_visibility: {
        value: cdktf.stringToHclTerraform(this._defaultProjectVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_projects_limit: {
        value: cdktf.numberToHclTerraform(this._defaultProjectsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_snippet_visibility: {
        value: cdktf.stringToHclTerraform(this._defaultSnippetVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_syntax_highlighting_theme: {
        value: cdktf.numberToHclTerraform(this._defaultSyntaxHighlightingTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_inactive_projects: {
        value: cdktf.booleanToHclTerraform(this._deleteInactiveProjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_unconfirmed_users: {
        value: cdktf.booleanToHclTerraform(this._deleteUnconfirmedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_adjourned_period: {
        value: cdktf.numberToHclTerraform(this._deletionAdjournedPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      diagramsnet_enabled: {
        value: cdktf.booleanToHclTerraform(this._diagramsnetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      diagramsnet_url: {
        value: cdktf.stringToHclTerraform(this._diagramsnetUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diff_max_files: {
        value: cdktf.numberToHclTerraform(this._diffMaxFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      diff_max_lines: {
        value: cdktf.numberToHclTerraform(this._diffMaxLines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      diff_max_patch_bytes: {
        value: cdktf.numberToHclTerraform(this._diffMaxPatchBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_admin_oauth_scopes: {
        value: cdktf.booleanToHclTerraform(this._disableAdminOauthScopes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_feed_token: {
        value: cdktf.booleanToHclTerraform(this._disableFeedToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_personal_access_tokens: {
        value: cdktf.booleanToHclTerraform(this._disablePersonalAccessTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled_oauth_sign_in_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledOauthSignInSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_rebinding_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._dnsRebindingProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_denylist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainDenylist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_denylist_enabled: {
        value: cdktf.booleanToHclTerraform(this._domainDenylistEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      downstream_pipeline_trigger_limit_per_project_user_sha: {
        value: cdktf.numberToHclTerraform(this._downstreamPipelineTriggerLimitPerProjectUserSha),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dsa_key_restriction: {
        value: cdktf.numberToHclTerraform(this._dsaKeyRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duo_features_enabled: {
        value: cdktf.booleanToHclTerraform(this._duoFeaturesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecdsa_key_restriction: {
        value: cdktf.numberToHclTerraform(this._ecdsaKeyRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ecdsa_sk_key_restriction: {
        value: cdktf.numberToHclTerraform(this._ecdsaSkKeyRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ed25519_key_restriction: {
        value: cdktf.numberToHclTerraform(this._ed25519KeyRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ed25519_sk_key_restriction: {
        value: cdktf.numberToHclTerraform(this._ed25519SkKeyRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eks_access_key_id: {
        value: cdktf.stringToHclTerraform(this._eksAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_account_id: {
        value: cdktf.stringToHclTerraform(this._eksAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eks_integration_enabled: {
        value: cdktf.booleanToHclTerraform(this._eksIntegrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eks_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._eksSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_aws: {
        value: cdktf.booleanToHclTerraform(this._elasticsearchAws),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elasticsearch_aws_access_key: {
        value: cdktf.stringToHclTerraform(this._elasticsearchAwsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_aws_region: {
        value: cdktf.stringToHclTerraform(this._elasticsearchAwsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._elasticsearchAwsSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_indexed_field_length_limit: {
        value: cdktf.numberToHclTerraform(this._elasticsearchIndexedFieldLengthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elasticsearch_indexed_file_size_limit_kb: {
        value: cdktf.numberToHclTerraform(this._elasticsearchIndexedFileSizeLimitKb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elasticsearch_indexing: {
        value: cdktf.booleanToHclTerraform(this._elasticsearchIndexing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elasticsearch_limit_indexing: {
        value: cdktf.booleanToHclTerraform(this._elasticsearchLimitIndexing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elasticsearch_max_bulk_concurrency: {
        value: cdktf.numberToHclTerraform(this._elasticsearchMaxBulkConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elasticsearch_max_bulk_size_mb: {
        value: cdktf.numberToHclTerraform(this._elasticsearchMaxBulkSizeMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elasticsearch_max_code_indexing_concurrency: {
        value: cdktf.numberToHclTerraform(this._elasticsearchMaxCodeIndexingConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      elasticsearch_namespace_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._elasticsearchNamespaceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      elasticsearch_password: {
        value: cdktf.stringToHclTerraform(this._elasticsearchPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._elasticsearchProjectIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      elasticsearch_requeue_workers: {
        value: cdktf.booleanToHclTerraform(this._elasticsearchRequeueWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elasticsearch_search: {
        value: cdktf.booleanToHclTerraform(this._elasticsearchSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elasticsearch_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._elasticsearchUrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      elasticsearch_username: {
        value: cdktf.stringToHclTerraform(this._elasticsearchUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_worker_number_of_shards: {
        value: cdktf.numberToHclTerraform(this._elasticsearchWorkerNumberOfShards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_additional_text: {
        value: cdktf.stringToHclTerraform(this._emailAdditionalText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_author_in_body: {
        value: cdktf.booleanToHclTerraform(this._emailAuthorInBody),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_confirmation_setting: {
        value: cdktf.stringToHclTerraform(this._emailConfirmationSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_artifact_external_redirect_warning_page: {
        value: cdktf.booleanToHclTerraform(this._enableArtifactExternalRedirectWarningPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_git_access_protocol: {
        value: cdktf.stringToHclTerraform(this._enabledGitAccessProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_namespace_storage_limit: {
        value: cdktf.booleanToHclTerraform(this._enforceNamespaceStorageLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_terms: {
        value: cdktf.booleanToHclTerraform(this._enforceTerms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_auth_client_cert: {
        value: cdktf.stringToHclTerraform(this._externalAuthClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_auth_client_key: {
        value: cdktf.stringToHclTerraform(this._externalAuthClientKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_auth_client_key_pass: {
        value: cdktf.stringToHclTerraform(this._externalAuthClientKeyPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_authorization_service_default_label: {
        value: cdktf.stringToHclTerraform(this._externalAuthorizationServiceDefaultLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_authorization_service_enabled: {
        value: cdktf.booleanToHclTerraform(this._externalAuthorizationServiceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_authorization_service_timeout: {
        value: cdktf.numberToHclTerraform(this._externalAuthorizationServiceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_authorization_service_url: {
        value: cdktf.stringToHclTerraform(this._externalAuthorizationServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_pipeline_validation_service_timeout: {
        value: cdktf.numberToHclTerraform(this._externalPipelineValidationServiceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_pipeline_validation_service_token: {
        value: cdktf.stringToHclTerraform(this._externalPipelineValidationServiceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_pipeline_validation_service_url: {
        value: cdktf.stringToHclTerraform(this._externalPipelineValidationServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_login_attempts_unlock_period_in_minutes: {
        value: cdktf.numberToHclTerraform(this._failedLoginAttemptsUnlockPeriodInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_template_project_id: {
        value: cdktf.numberToHclTerraform(this._fileTemplateProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first_day_of_week: {
        value: cdktf.numberToHclTerraform(this._firstDayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_node_allowed_ips: {
        value: cdktf.stringToHclTerraform(this._geoNodeAllowedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_status_timeout: {
        value: cdktf.numberToHclTerraform(this._geoStatusTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      git_rate_limit_users_alertlist: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._gitRateLimitUsersAlertlist),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      git_rate_limit_users_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gitRateLimitUsersAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      git_two_factor_session_expiry: {
        value: cdktf.numberToHclTerraform(this._gitTwoFactorSessionExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gitaly_timeout_default: {
        value: cdktf.numberToHclTerraform(this._gitalyTimeoutDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gitaly_timeout_fast: {
        value: cdktf.numberToHclTerraform(this._gitalyTimeoutFast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gitaly_timeout_medium: {
        value: cdktf.numberToHclTerraform(this._gitalyTimeoutMedium),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gitlab_shell_operation_limit: {
        value: cdktf.numberToHclTerraform(this._gitlabShellOperationLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gitpod_enabled: {
        value: cdktf.booleanToHclTerraform(this._gitpodEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gitpod_url: {
        value: cdktf.stringToHclTerraform(this._gitpodUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      globally_allowed_ips: {
        value: cdktf.stringToHclTerraform(this._globallyAllowedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_enabled: {
        value: cdktf.booleanToHclTerraform(this._grafanaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grafana_url: {
        value: cdktf.stringToHclTerraform(this._grafanaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gravatar_enabled: {
        value: cdktf.booleanToHclTerraform(this._gravatarEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_owners_can_manage_default_branch_protection: {
        value: cdktf.booleanToHclTerraform(this._groupOwnersCanManageDefaultBranchProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      help_page_hide_commercial_content: {
        value: cdktf.booleanToHclTerraform(this._helpPageHideCommercialContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      help_page_support_url: {
        value: cdktf.stringToHclTerraform(this._helpPageSupportUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_page_text: {
        value: cdktf.stringToHclTerraform(this._helpPageText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_text: {
        value: cdktf.stringToHclTerraform(this._helpText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_third_party_offers: {
        value: cdktf.booleanToHclTerraform(this._hideThirdPartyOffers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      home_page_url: {
        value: cdktf.stringToHclTerraform(this._homePageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      housekeeping_enabled: {
        value: cdktf.booleanToHclTerraform(this._housekeepingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      housekeeping_optimize_repository_period: {
        value: cdktf.numberToHclTerraform(this._housekeepingOptimizeRepositoryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      html_emails_enabled: {
        value: cdktf.booleanToHclTerraform(this._htmlEmailsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      in_product_marketing_emails_enabled: {
        value: cdktf.booleanToHclTerraform(this._inProductMarketingEmailsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inactive_projects_delete_after_months: {
        value: cdktf.numberToHclTerraform(this._inactiveProjectsDeleteAfterMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inactive_projects_min_size_mb: {
        value: cdktf.numberToHclTerraform(this._inactiveProjectsMinSizeMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inactive_projects_send_warning_email_after_months: {
        value: cdktf.numberToHclTerraform(this._inactiveProjectsSendWarningEmailAfterMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_optional_metrics_in_service_ping: {
        value: cdktf.booleanToHclTerraform(this._includeOptionalMetricsInServicePing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      invisible_captcha_enabled: {
        value: cdktf.booleanToHclTerraform(this._invisibleCaptchaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issues_create_limit: {
        value: cdktf.numberToHclTerraform(this._issuesCreateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jira_connect_application_key: {
        value: cdktf.stringToHclTerraform(this._jiraConnectApplicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_connect_proxy_url: {
        value: cdktf.stringToHclTerraform(this._jiraConnectProxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_connect_public_key_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._jiraConnectPublicKeyStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_latest_artifact: {
        value: cdktf.booleanToHclTerraform(this._keepLatestArtifact),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_markdown_version: {
        value: cdktf.numberToHclTerraform(this._localMarkdownVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lock_duo_features_enabled: {
        value: cdktf.booleanToHclTerraform(this._lockDuoFeaturesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lock_memberships_to_ldap: {
        value: cdktf.booleanToHclTerraform(this._lockMembershipsToLdap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mailgun_events_enabled: {
        value: cdktf.booleanToHclTerraform(this._mailgunEventsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mailgun_signing_key: {
        value: cdktf.stringToHclTerraform(this._mailgunSigningKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_mode: {
        value: cdktf.booleanToHclTerraform(this._maintenanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_mode_message: {
        value: cdktf.stringToHclTerraform(this._maintenanceModeMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maven_package_requests_forwarding: {
        value: cdktf.booleanToHclTerraform(this._mavenPackageRequestsForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_artifacts_size: {
        value: cdktf.numberToHclTerraform(this._maxArtifactsSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_attachment_size: {
        value: cdktf.numberToHclTerraform(this._maxAttachmentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_decompressed_archive_size: {
        value: cdktf.numberToHclTerraform(this._maxDecompressedArchiveSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_export_size: {
        value: cdktf.numberToHclTerraform(this._maxExportSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_import_remote_file_size: {
        value: cdktf.numberToHclTerraform(this._maxImportRemoteFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_import_size: {
        value: cdktf.numberToHclTerraform(this._maxImportSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_login_attempts: {
        value: cdktf.numberToHclTerraform(this._maxLoginAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_repository_downloads: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfRepositoryDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_repository_downloads_within_time_period: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfRepositoryDownloadsWithinTimePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_pages_size: {
        value: cdktf.numberToHclTerraform(this._maxPagesSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_personal_access_token_lifetime: {
        value: cdktf.numberToHclTerraform(this._maxPersonalAccessTokenLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ssh_key_lifetime: {
        value: cdktf.numberToHclTerraform(this._maxSshKeyLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_terraform_state_size_bytes: {
        value: cdktf.numberToHclTerraform(this._maxTerraformStateSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_method_call_threshold: {
        value: cdktf.numberToHclTerraform(this._metricsMethodCallThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_password_length: {
        value: cdktf.numberToHclTerraform(this._minimumPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mirror_available: {
        value: cdktf.booleanToHclTerraform(this._mirrorAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_capacity_threshold: {
        value: cdktf.numberToHclTerraform(this._mirrorCapacityThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mirror_max_capacity: {
        value: cdktf.numberToHclTerraform(this._mirrorMaxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mirror_max_delay: {
        value: cdktf.numberToHclTerraform(this._mirrorMaxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      npm_package_requests_forwarding: {
        value: cdktf.booleanToHclTerraform(this._npmPackageRequestsForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nuget_skip_metadata_url_validation: {
        value: cdktf.booleanToHclTerraform(this._nugetSkipMetadataUrlValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      outbound_local_requests_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outboundLocalRequestsWhitelist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      package_metadata_purl_types: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._packageMetadataPurlTypes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      package_registry_allow_anyone_to_pull_option: {
        value: cdktf.booleanToHclTerraform(this._packageRegistryAllowAnyoneToPullOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      package_registry_cleanup_policies_worker_capacity: {
        value: cdktf.numberToHclTerraform(this._packageRegistryCleanupPoliciesWorkerCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pages_domain_verification_enabled: {
        value: cdktf.booleanToHclTerraform(this._pagesDomainVerificationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_authentication_enabled_for_git: {
        value: cdktf.booleanToHclTerraform(this._passwordAuthenticationEnabledForGit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_authentication_enabled_for_web: {
        value: cdktf.booleanToHclTerraform(this._passwordAuthenticationEnabledForWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_lowercase_required: {
        value: cdktf.booleanToHclTerraform(this._passwordLowercaseRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_number_required: {
        value: cdktf.booleanToHclTerraform(this._passwordNumberRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_symbol_required: {
        value: cdktf.booleanToHclTerraform(this._passwordSymbolRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_uppercase_required: {
        value: cdktf.booleanToHclTerraform(this._passwordUppercaseRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      performance_bar_allowed_group_path: {
        value: cdktf.stringToHclTerraform(this._performanceBarAllowedGroupPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personal_access_token_prefix: {
        value: cdktf.stringToHclTerraform(this._personalAccessTokenPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_limit_per_project_user_sha: {
        value: cdktf.numberToHclTerraform(this._pipelineLimitPerProjectUserSha),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plantuml_enabled: {
        value: cdktf.booleanToHclTerraform(this._plantumlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plantuml_url: {
        value: cdktf.stringToHclTerraform(this._plantumlUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval_multiplier: {
        value: cdktf.numberToHclTerraform(this._pollingIntervalMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_export_enabled: {
        value: cdktf.booleanToHclTerraform(this._projectExportEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_jobs_api_rate_limit: {
        value: cdktf.numberToHclTerraform(this._projectJobsApiRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      projects_api_rate_limit_unauthenticated: {
        value: cdktf.numberToHclTerraform(this._projectsApiRateLimitUnauthenticated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prometheus_metrics_enabled: {
        value: cdktf.booleanToHclTerraform(this._prometheusMetricsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protected_ci_variables: {
        value: cdktf.booleanToHclTerraform(this._protectedCiVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      push_event_activities_limit: {
        value: cdktf.numberToHclTerraform(this._pushEventActivitiesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      push_event_hooks_limit: {
        value: cdktf.numberToHclTerraform(this._pushEventHooksLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pypi_package_requests_forwarding: {
        value: cdktf.booleanToHclTerraform(this._pypiPackageRequestsForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rate_limiting_response_text: {
        value: cdktf.stringToHclTerraform(this._rateLimitingResponseText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raw_blob_request_limit: {
        value: cdktf.numberToHclTerraform(this._rawBlobRequestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recaptcha_enabled: {
        value: cdktf.booleanToHclTerraform(this._recaptchaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recaptcha_private_key: {
        value: cdktf.stringToHclTerraform(this._recaptchaPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recaptcha_site_key: {
        value: cdktf.stringToHclTerraform(this._recaptchaSiteKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_max_input_size: {
        value: cdktf.numberToHclTerraform(this._receiveMaxInputSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      receptive_cluster_agents_enabled: {
        value: cdktf.booleanToHclTerraform(this._receptiveClusterAgentsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remember_me_enabled: {
        value: cdktf.booleanToHclTerraform(this._rememberMeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_checks_enabled: {
        value: cdktf.booleanToHclTerraform(this._repositoryChecksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_size_limit: {
        value: cdktf.numberToHclTerraform(this._repositorySizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repository_storages_weighted: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._repositoryStoragesWeighted),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      require_admin_approval_after_user_signup: {
        value: cdktf.booleanToHclTerraform(this._requireAdminApprovalAfterUserSignup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_admin_two_factor_authentication: {
        value: cdktf.booleanToHclTerraform(this._requireAdminTwoFactorAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_personal_access_token_expiry: {
        value: cdktf.booleanToHclTerraform(this._requirePersonalAccessTokenExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_two_factor_authentication: {
        value: cdktf.booleanToHclTerraform(this._requireTwoFactorAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restricted_visibility_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictedVisibilityLevels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rsa_key_restriction: {
        value: cdktf.numberToHclTerraform(this._rsaKeyRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_rate_limit: {
        value: cdktf.numberToHclTerraform(this._searchRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_rate_limit_unauthenticated: {
        value: cdktf.numberToHclTerraform(this._searchRateLimitUnauthenticated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_approval_policies_limit: {
        value: cdktf.numberToHclTerraform(this._securityApprovalPoliciesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_policy_global_group_approvers_enabled: {
        value: cdktf.booleanToHclTerraform(this._securityPolicyGlobalGroupApproversEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_txt_content: {
        value: cdktf.stringToHclTerraform(this._securityTxtContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_user_confirmation_email: {
        value: cdktf.booleanToHclTerraform(this._sendUserConfirmationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_access_tokens_expiration_enforced: {
        value: cdktf.booleanToHclTerraform(this._serviceAccessTokensExpirationEnforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_expire_delay: {
        value: cdktf.numberToHclTerraform(this._sessionExpireDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_runners_enabled: {
        value: cdktf.booleanToHclTerraform(this._sharedRunnersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_runners_minutes: {
        value: cdktf.numberToHclTerraform(this._sharedRunnersMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_runners_text: {
        value: cdktf.stringToHclTerraform(this._sharedRunnersText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sidekiq_job_limiter_compression_threshold_bytes: {
        value: cdktf.numberToHclTerraform(this._sidekiqJobLimiterCompressionThresholdBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sidekiq_job_limiter_limit_bytes: {
        value: cdktf.numberToHclTerraform(this._sidekiqJobLimiterLimitBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sidekiq_job_limiter_mode: {
        value: cdktf.stringToHclTerraform(this._sidekiqJobLimiterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_in_text: {
        value: cdktf.stringToHclTerraform(this._signInText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signup_enabled: {
        value: cdktf.booleanToHclTerraform(this._signupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      silent_admin_exports_enabled: {
        value: cdktf.booleanToHclTerraform(this._silentAdminExportsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      silent_mode_enabled: {
        value: cdktf.booleanToHclTerraform(this._silentModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slack_app_enabled: {
        value: cdktf.booleanToHclTerraform(this._slackAppEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slack_app_id: {
        value: cdktf.stringToHclTerraform(this._slackAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_app_secret: {
        value: cdktf.stringToHclTerraform(this._slackAppSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_app_signing_secret: {
        value: cdktf.stringToHclTerraform(this._slackAppSigningSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_app_verification_token: {
        value: cdktf.stringToHclTerraform(this._slackAppVerificationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet_size_limit: {
        value: cdktf.numberToHclTerraform(this._snippetSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snowplow_app_id: {
        value: cdktf.stringToHclTerraform(this._snowplowAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowplow_collector_hostname: {
        value: cdktf.stringToHclTerraform(this._snowplowCollectorHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowplow_cookie_domain: {
        value: cdktf.stringToHclTerraform(this._snowplowCookieDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowplow_database_collector_hostname: {
        value: cdktf.stringToHclTerraform(this._snowplowDatabaseCollectorHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowplow_enabled: {
        value: cdktf.booleanToHclTerraform(this._snowplowEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sourcegraph_enabled: {
        value: cdktf.booleanToHclTerraform(this._sourcegraphEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sourcegraph_public_only: {
        value: cdktf.booleanToHclTerraform(this._sourcegraphPublicOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sourcegraph_url: {
        value: cdktf.stringToHclTerraform(this._sourcegraphUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_check_api_key: {
        value: cdktf.stringToHclTerraform(this._spamCheckApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_check_endpoint_enabled: {
        value: cdktf.booleanToHclTerraform(this._spamCheckEndpointEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spam_check_endpoint_url: {
        value: cdktf.stringToHclTerraform(this._spamCheckEndpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_objects_external_storage_auth_token: {
        value: cdktf.stringToHclTerraform(this._staticObjectsExternalStorageAuthToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_objects_external_storage_url: {
        value: cdktf.stringToHclTerraform(this._staticObjectsExternalStorageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suggest_pipeline_enabled: {
        value: cdktf.booleanToHclTerraform(this._suggestPipelineEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terminal_max_session_time: {
        value: cdktf.numberToHclTerraform(this._terminalMaxSessionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      terms: {
        value: cdktf.stringToHclTerraform(this._terms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttle_authenticated_api_enabled: {
        value: cdktf.booleanToHclTerraform(this._throttleAuthenticatedApiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throttle_authenticated_api_period_in_seconds: {
        value: cdktf.numberToHclTerraform(this._throttleAuthenticatedApiPeriodInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_authenticated_api_requests_per_period: {
        value: cdktf.numberToHclTerraform(this._throttleAuthenticatedApiRequestsPerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_authenticated_packages_api_enabled: {
        value: cdktf.booleanToHclTerraform(this._throttleAuthenticatedPackagesApiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throttle_authenticated_packages_api_period_in_seconds: {
        value: cdktf.numberToHclTerraform(this._throttleAuthenticatedPackagesApiPeriodInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_authenticated_packages_api_requests_per_period: {
        value: cdktf.numberToHclTerraform(this._throttleAuthenticatedPackagesApiRequestsPerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_authenticated_web_enabled: {
        value: cdktf.booleanToHclTerraform(this._throttleAuthenticatedWebEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throttle_authenticated_web_period_in_seconds: {
        value: cdktf.numberToHclTerraform(this._throttleAuthenticatedWebPeriodInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_authenticated_web_requests_per_period: {
        value: cdktf.numberToHclTerraform(this._throttleAuthenticatedWebRequestsPerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_unauthenticated_api_enabled: {
        value: cdktf.booleanToHclTerraform(this._throttleUnauthenticatedApiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throttle_unauthenticated_api_period_in_seconds: {
        value: cdktf.numberToHclTerraform(this._throttleUnauthenticatedApiPeriodInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_unauthenticated_api_requests_per_period: {
        value: cdktf.numberToHclTerraform(this._throttleUnauthenticatedApiRequestsPerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_unauthenticated_packages_api_enabled: {
        value: cdktf.booleanToHclTerraform(this._throttleUnauthenticatedPackagesApiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throttle_unauthenticated_packages_api_period_in_seconds: {
        value: cdktf.numberToHclTerraform(this._throttleUnauthenticatedPackagesApiPeriodInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_unauthenticated_packages_api_requests_per_period: {
        value: cdktf.numberToHclTerraform(this._throttleUnauthenticatedPackagesApiRequestsPerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_unauthenticated_web_enabled: {
        value: cdktf.booleanToHclTerraform(this._throttleUnauthenticatedWebEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throttle_unauthenticated_web_period_in_seconds: {
        value: cdktf.numberToHclTerraform(this._throttleUnauthenticatedWebPeriodInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throttle_unauthenticated_web_requests_per_period: {
        value: cdktf.numberToHclTerraform(this._throttleUnauthenticatedWebRequestsPerPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_tracking_limit_to_hours: {
        value: cdktf.booleanToHclTerraform(this._timeTrackingLimitToHours),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      two_factor_grace_period: {
        value: cdktf.numberToHclTerraform(this._twoFactorGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unconfirmed_users_delete_after_days: {
        value: cdktf.numberToHclTerraform(this._unconfirmedUsersDeleteAfterDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unique_ips_limit_enabled: {
        value: cdktf.booleanToHclTerraform(this._uniqueIpsLimitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unique_ips_limit_per_user: {
        value: cdktf.numberToHclTerraform(this._uniqueIpsLimitPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unique_ips_limit_time_window: {
        value: cdktf.numberToHclTerraform(this._uniqueIpsLimitTimeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_runner_versions_enabled: {
        value: cdktf.booleanToHclTerraform(this._updateRunnerVersionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usage_ping_enabled: {
        value: cdktf.booleanToHclTerraform(this._usagePingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_clickhouse_for_analytics: {
        value: cdktf.booleanToHclTerraform(this._useClickhouseForAnalytics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_deactivation_emails_enabled: {
        value: cdktf.booleanToHclTerraform(this._userDeactivationEmailsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_default_external: {
        value: cdktf.booleanToHclTerraform(this._userDefaultExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_default_internal_regex: {
        value: cdktf.stringToHclTerraform(this._userDefaultInternalRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defaults_to_private_profile: {
        value: cdktf.booleanToHclTerraform(this._userDefaultsToPrivateProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_oauth_applications: {
        value: cdktf.booleanToHclTerraform(this._userOauthApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_show_add_ssh_key_message: {
        value: cdktf.booleanToHclTerraform(this._userShowAddSshKeyMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      valid_runner_registrars: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._validRunnerRegistrars),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      version_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._versionCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_ide_clientside_preview_enabled: {
        value: cdktf.booleanToHclTerraform(this._webIdeClientsidePreviewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      whats_new_variant: {
        value: cdktf.stringToHclTerraform(this._whatsNewVariant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiki_page_max_content_bytes: {
        value: cdktf.numberToHclTerraform(this._wikiPageMaxContentBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_branch_protection_defaults: {
        value: applicationSettingsDefaultBranchProtectionDefaultsToHclTerraform(this._defaultBranchProtectionDefaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSettingsDefaultBranchProtectionDefaultsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
