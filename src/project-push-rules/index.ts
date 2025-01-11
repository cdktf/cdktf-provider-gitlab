// https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectPushRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * All commit author emails must match this regex, e.g. `@my-company.com$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#author_email_regex ProjectPushRulesA#author_email_regex}
  */
  readonly authorEmailRegex?: string;
  /**
  * All branch names must match this regex, e.g. `(feature|hotfix)\/*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#branch_name_regex ProjectPushRulesA#branch_name_regex}
  */
  readonly branchNameRegex?: string;
  /**
  * Users can only push commits to this repository that were committed with one of their own verified emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#commit_committer_check ProjectPushRulesA#commit_committer_check}
  */
  readonly commitCommitterCheck?: boolean | cdktf.IResolvable;
  /**
  * Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#commit_committer_name_check ProjectPushRulesA#commit_committer_name_check}
  */
  readonly commitCommitterNameCheck?: boolean | cdktf.IResolvable;
  /**
  * No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#commit_message_negative_regex ProjectPushRulesA#commit_message_negative_regex}
  */
  readonly commitMessageNegativeRegex?: string;
  /**
  * All commit messages must match this regex, e.g. `Fixed \d+\..*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#commit_message_regex ProjectPushRulesA#commit_message_regex}
  */
  readonly commitMessageRegex?: string;
  /**
  * Deny deleting a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#deny_delete_tag ProjectPushRulesA#deny_delete_tag}
  */
  readonly denyDeleteTag?: boolean | cdktf.IResolvable;
  /**
  * All committed filenames must not match this regex, e.g. `(jar|exe)$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#file_name_regex ProjectPushRulesA#file_name_regex}
  */
  readonly fileNameRegex?: string;
  /**
  * Maximum file size (MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#max_file_size ProjectPushRulesA#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Restrict commits by author (email) to existing GitLab users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#member_check ProjectPushRulesA#member_check}
  */
  readonly memberCheck?: boolean | cdktf.IResolvable;
  /**
  * GitLab will reject any files that are likely to contain secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#prevent_secrets ProjectPushRulesA#prevent_secrets}
  */
  readonly preventSecrets?: boolean | cdktf.IResolvable;
  /**
  * The ID or URL-encoded path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#project ProjectPushRulesA#project}
  */
  readonly project: string;
  /**
  * Reject commit when it’s not DCO certified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#reject_non_dco_commits ProjectPushRulesA#reject_non_dco_commits}
  */
  readonly rejectNonDcoCommits?: boolean | cdktf.IResolvable;
  /**
  * Reject commit when it’s not signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#reject_unsigned_commits ProjectPushRulesA#reject_unsigned_commits}
  */
  readonly rejectUnsignedCommits?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules gitlab_project_push_rules}
*/
export class ProjectPushRulesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_push_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectPushRulesA to import
  * @param importFromId The id of the existing ProjectPushRulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectPushRulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_push_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project_push_rules gitlab_project_push_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectPushRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectPushRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_push_rules',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.7.1',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorEmailRegex = config.authorEmailRegex;
    this._branchNameRegex = config.branchNameRegex;
    this._commitCommitterCheck = config.commitCommitterCheck;
    this._commitCommitterNameCheck = config.commitCommitterNameCheck;
    this._commitMessageNegativeRegex = config.commitMessageNegativeRegex;
    this._commitMessageRegex = config.commitMessageRegex;
    this._denyDeleteTag = config.denyDeleteTag;
    this._fileNameRegex = config.fileNameRegex;
    this._maxFileSize = config.maxFileSize;
    this._memberCheck = config.memberCheck;
    this._preventSecrets = config.preventSecrets;
    this._project = config.project;
    this._rejectNonDcoCommits = config.rejectNonDcoCommits;
    this._rejectUnsignedCommits = config.rejectUnsignedCommits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_email_regex - computed: true, optional: true, required: false
  private _authorEmailRegex?: string; 
  public get authorEmailRegex() {
    return this.getStringAttribute('author_email_regex');
  }
  public set authorEmailRegex(value: string) {
    this._authorEmailRegex = value;
  }
  public resetAuthorEmailRegex() {
    this._authorEmailRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailRegexInput() {
    return this._authorEmailRegex;
  }

  // branch_name_regex - computed: true, optional: true, required: false
  private _branchNameRegex?: string; 
  public get branchNameRegex() {
    return this.getStringAttribute('branch_name_regex');
  }
  public set branchNameRegex(value: string) {
    this._branchNameRegex = value;
  }
  public resetBranchNameRegex() {
    this._branchNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameRegexInput() {
    return this._branchNameRegex;
  }

  // commit_committer_check - computed: true, optional: true, required: false
  private _commitCommitterCheck?: boolean | cdktf.IResolvable; 
  public get commitCommitterCheck() {
    return this.getBooleanAttribute('commit_committer_check');
  }
  public set commitCommitterCheck(value: boolean | cdktf.IResolvable) {
    this._commitCommitterCheck = value;
  }
  public resetCommitCommitterCheck() {
    this._commitCommitterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitCommitterCheckInput() {
    return this._commitCommitterCheck;
  }

  // commit_committer_name_check - computed: true, optional: true, required: false
  private _commitCommitterNameCheck?: boolean | cdktf.IResolvable; 
  public get commitCommitterNameCheck() {
    return this.getBooleanAttribute('commit_committer_name_check');
  }
  public set commitCommitterNameCheck(value: boolean | cdktf.IResolvable) {
    this._commitCommitterNameCheck = value;
  }
  public resetCommitCommitterNameCheck() {
    this._commitCommitterNameCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitCommitterNameCheckInput() {
    return this._commitCommitterNameCheck;
  }

  // commit_message_negative_regex - computed: true, optional: true, required: false
  private _commitMessageNegativeRegex?: string; 
  public get commitMessageNegativeRegex() {
    return this.getStringAttribute('commit_message_negative_regex');
  }
  public set commitMessageNegativeRegex(value: string) {
    this._commitMessageNegativeRegex = value;
  }
  public resetCommitMessageNegativeRegex() {
    this._commitMessageNegativeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageNegativeRegexInput() {
    return this._commitMessageNegativeRegex;
  }

  // commit_message_regex - computed: true, optional: true, required: false
  private _commitMessageRegex?: string; 
  public get commitMessageRegex() {
    return this.getStringAttribute('commit_message_regex');
  }
  public set commitMessageRegex(value: string) {
    this._commitMessageRegex = value;
  }
  public resetCommitMessageRegex() {
    this._commitMessageRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageRegexInput() {
    return this._commitMessageRegex;
  }

  // deny_delete_tag - computed: true, optional: true, required: false
  private _denyDeleteTag?: boolean | cdktf.IResolvable; 
  public get denyDeleteTag() {
    return this.getBooleanAttribute('deny_delete_tag');
  }
  public set denyDeleteTag(value: boolean | cdktf.IResolvable) {
    this._denyDeleteTag = value;
  }
  public resetDenyDeleteTag() {
    this._denyDeleteTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDeleteTagInput() {
    return this._denyDeleteTag;
  }

  // file_name_regex - computed: true, optional: true, required: false
  private _fileNameRegex?: string; 
  public get fileNameRegex() {
    return this.getStringAttribute('file_name_regex');
  }
  public set fileNameRegex(value: string) {
    this._fileNameRegex = value;
  }
  public resetFileNameRegex() {
    this._fileNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameRegexInput() {
    return this._fileNameRegex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_file_size - computed: true, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // member_check - computed: true, optional: true, required: false
  private _memberCheck?: boolean | cdktf.IResolvable; 
  public get memberCheck() {
    return this.getBooleanAttribute('member_check');
  }
  public set memberCheck(value: boolean | cdktf.IResolvable) {
    this._memberCheck = value;
  }
  public resetMemberCheck() {
    this._memberCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberCheckInput() {
    return this._memberCheck;
  }

  // prevent_secrets - computed: true, optional: true, required: false
  private _preventSecrets?: boolean | cdktf.IResolvable; 
  public get preventSecrets() {
    return this.getBooleanAttribute('prevent_secrets');
  }
  public set preventSecrets(value: boolean | cdktf.IResolvable) {
    this._preventSecrets = value;
  }
  public resetPreventSecrets() {
    this._preventSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventSecretsInput() {
    return this._preventSecrets;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // reject_non_dco_commits - computed: true, optional: true, required: false
  private _rejectNonDcoCommits?: boolean | cdktf.IResolvable; 
  public get rejectNonDcoCommits() {
    return this.getBooleanAttribute('reject_non_dco_commits');
  }
  public set rejectNonDcoCommits(value: boolean | cdktf.IResolvable) {
    this._rejectNonDcoCommits = value;
  }
  public resetRejectNonDcoCommits() {
    this._rejectNonDcoCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectNonDcoCommitsInput() {
    return this._rejectNonDcoCommits;
  }

  // reject_unsigned_commits - computed: true, optional: true, required: false
  private _rejectUnsignedCommits?: boolean | cdktf.IResolvable; 
  public get rejectUnsignedCommits() {
    return this.getBooleanAttribute('reject_unsigned_commits');
  }
  public set rejectUnsignedCommits(value: boolean | cdktf.IResolvable) {
    this._rejectUnsignedCommits = value;
  }
  public resetRejectUnsignedCommits() {
    this._rejectUnsignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnsignedCommitsInput() {
    return this._rejectUnsignedCommits;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author_email_regex: cdktf.stringToTerraform(this._authorEmailRegex),
      branch_name_regex: cdktf.stringToTerraform(this._branchNameRegex),
      commit_committer_check: cdktf.booleanToTerraform(this._commitCommitterCheck),
      commit_committer_name_check: cdktf.booleanToTerraform(this._commitCommitterNameCheck),
      commit_message_negative_regex: cdktf.stringToTerraform(this._commitMessageNegativeRegex),
      commit_message_regex: cdktf.stringToTerraform(this._commitMessageRegex),
      deny_delete_tag: cdktf.booleanToTerraform(this._denyDeleteTag),
      file_name_regex: cdktf.stringToTerraform(this._fileNameRegex),
      max_file_size: cdktf.numberToTerraform(this._maxFileSize),
      member_check: cdktf.booleanToTerraform(this._memberCheck),
      prevent_secrets: cdktf.booleanToTerraform(this._preventSecrets),
      project: cdktf.stringToTerraform(this._project),
      reject_non_dco_commits: cdktf.booleanToTerraform(this._rejectNonDcoCommits),
      reject_unsigned_commits: cdktf.booleanToTerraform(this._rejectUnsignedCommits),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author_email_regex: {
        value: cdktf.stringToHclTerraform(this._authorEmailRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch_name_regex: {
        value: cdktf.stringToHclTerraform(this._branchNameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_committer_check: {
        value: cdktf.booleanToHclTerraform(this._commitCommitterCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      commit_committer_name_check: {
        value: cdktf.booleanToHclTerraform(this._commitCommitterNameCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      commit_message_negative_regex: {
        value: cdktf.stringToHclTerraform(this._commitMessageNegativeRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_message_regex: {
        value: cdktf.stringToHclTerraform(this._commitMessageRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_delete_tag: {
        value: cdktf.booleanToHclTerraform(this._denyDeleteTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_name_regex: {
        value: cdktf.stringToHclTerraform(this._fileNameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_file_size: {
        value: cdktf.numberToHclTerraform(this._maxFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_check: {
        value: cdktf.booleanToHclTerraform(this._memberCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_secrets: {
        value: cdktf.booleanToHclTerraform(this._preventSecrets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_non_dco_commits: {
        value: cdktf.booleanToHclTerraform(this._rejectNonDcoCommits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reject_unsigned_commits: {
        value: cdktf.booleanToHclTerraform(this._rejectUnsignedCommits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
