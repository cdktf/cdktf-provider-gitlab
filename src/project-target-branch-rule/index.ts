/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_target_branch_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectTargetBranchRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or URL-encoded path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_target_branch_rule#project ProjectTargetBranchRule#project}
  */
  readonly project: string;
  /**
  * A pattern matching the branch name for which the merge request should have a default target branch configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_target_branch_rule#source_branch_pattern ProjectTargetBranchRule#source_branch_pattern}
  */
  readonly sourceBranchPattern: string;
  /**
  * The name of the branch to which the merge request should be addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_target_branch_rule#target_branch_name ProjectTargetBranchRule#target_branch_name}
  */
  readonly targetBranchName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_target_branch_rule gitlab_project_target_branch_rule}
*/
export class ProjectTargetBranchRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_target_branch_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectTargetBranchRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectTargetBranchRule to import
  * @param importFromId The id of the existing ProjectTargetBranchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_target_branch_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectTargetBranchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_target_branch_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_target_branch_rule gitlab_project_target_branch_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectTargetBranchRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectTargetBranchRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_target_branch_rule',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.1.1',
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
    this._project = config.project;
    this._sourceBranchPattern = config.sourceBranchPattern;
    this._targetBranchName = config.targetBranchName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // source_branch_pattern - computed: false, optional: false, required: true
  private _sourceBranchPattern?: string; 
  public get sourceBranchPattern() {
    return this.getStringAttribute('source_branch_pattern');
  }
  public set sourceBranchPattern(value: string) {
    this._sourceBranchPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchPatternInput() {
    return this._sourceBranchPattern;
  }

  // target_branch_name - computed: false, optional: false, required: true
  private _targetBranchName?: string; 
  public get targetBranchName() {
    return this.getStringAttribute('target_branch_name');
  }
  public set targetBranchName(value: string) {
    this._targetBranchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBranchNameInput() {
    return this._targetBranchName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      source_branch_pattern: cdktf.stringToTerraform(this._sourceBranchPattern),
      target_branch_name: cdktf.stringToTerraform(this._targetBranchName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_branch_pattern: {
        value: cdktf.stringToHclTerraform(this._sourceBranchPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_branch_name: {
        value: cdktf.stringToHclTerraform(this._targetBranchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
