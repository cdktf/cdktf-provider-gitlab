/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectContainerRepositoryProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Minimum GitLab access level required to delete container images in the container registry. For example maintainer, owner, admin. Must be provided when `minimum_access_level_for_push` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#minimum_access_level_for_delete ProjectContainerRepositoryProtection#minimum_access_level_for_delete}
  */
  readonly minimumAccessLevelForDelete?: string;
  /**
  * Minimum GitLab access level required to push container images to the container registry. For example maintainer, owner or admin. Must be provided when `minimum_access_level_for_delete` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#minimum_access_level_for_push ProjectContainerRepositoryProtection#minimum_access_level_for_push}
  */
  readonly minimumAccessLevelForPush?: string;
  /**
  * ID or URL-encoded path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#project ProjectContainerRepositoryProtection#project}
  */
  readonly project: string;
  /**
  * Container repository path pattern protected by the protection rule. Wildcard character * allowed. Repository path pattern should start with the project's full path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#repository_path_pattern ProjectContainerRepositoryProtection#repository_path_pattern}
  */
  readonly repositoryPathPattern: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection gitlab_project_container_repository_protection}
*/
export class ProjectContainerRepositoryProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_container_repository_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectContainerRepositoryProtection to import
  * @param importFromId The id of the existing ProjectContainerRepositoryProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectContainerRepositoryProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_container_repository_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection gitlab_project_container_repository_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectContainerRepositoryProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectContainerRepositoryProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_container_repository_protection',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.2.0',
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
    this._minimumAccessLevelForDelete = config.minimumAccessLevelForDelete;
    this._minimumAccessLevelForPush = config.minimumAccessLevelForPush;
    this._project = config.project;
    this._repositoryPathPattern = config.repositoryPathPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_access_level_for_delete - computed: false, optional: true, required: false
  private _minimumAccessLevelForDelete?: string; 
  public get minimumAccessLevelForDelete() {
    return this.getStringAttribute('minimum_access_level_for_delete');
  }
  public set minimumAccessLevelForDelete(value: string) {
    this._minimumAccessLevelForDelete = value;
  }
  public resetMinimumAccessLevelForDelete() {
    this._minimumAccessLevelForDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAccessLevelForDeleteInput() {
    return this._minimumAccessLevelForDelete;
  }

  // minimum_access_level_for_push - computed: false, optional: true, required: false
  private _minimumAccessLevelForPush?: string; 
  public get minimumAccessLevelForPush() {
    return this.getStringAttribute('minimum_access_level_for_push');
  }
  public set minimumAccessLevelForPush(value: string) {
    this._minimumAccessLevelForPush = value;
  }
  public resetMinimumAccessLevelForPush() {
    this._minimumAccessLevelForPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAccessLevelForPushInput() {
    return this._minimumAccessLevelForPush;
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

  // protection_rule_id - computed: true, optional: false, required: false
  public get protectionRuleId() {
    return this.getNumberAttribute('protection_rule_id');
  }

  // repository_path_pattern - computed: false, optional: false, required: true
  private _repositoryPathPattern?: string; 
  public get repositoryPathPattern() {
    return this.getStringAttribute('repository_path_pattern');
  }
  public set repositoryPathPattern(value: string) {
    this._repositoryPathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathPatternInput() {
    return this._repositoryPathPattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      minimum_access_level_for_delete: cdktf.stringToTerraform(this._minimumAccessLevelForDelete),
      minimum_access_level_for_push: cdktf.stringToTerraform(this._minimumAccessLevelForPush),
      project: cdktf.stringToTerraform(this._project),
      repository_path_pattern: cdktf.stringToTerraform(this._repositoryPathPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      minimum_access_level_for_delete: {
        value: cdktf.stringToHclTerraform(this._minimumAccessLevelForDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_access_level_for_push: {
        value: cdktf.stringToHclTerraform(this._minimumAccessLevelForPush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_path_pattern: {
        value: cdktf.stringToHclTerraform(this._repositoryPathPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
