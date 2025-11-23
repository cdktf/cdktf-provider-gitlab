/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectPagesSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean indicating if the project is set to force https. Requires `external_https` to be configured in the GitLab instance: https://docs.gitlab.com/administration/pages/#custom-domains-with-tls-support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings#force_https ProjectPagesSettings#force_https}
  */
  readonly forceHttps?: boolean | cdktf.IResolvable;
  /**
  * Boolean indicating if a unique domain is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings#is_unique_domain_enabled ProjectPagesSettings#is_unique_domain_enabled}
  */
  readonly isUniqueDomainEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set to true if the pages settings should not be reset to their pre-terraform defaults on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings#keep_settings_on_destroy ProjectPagesSettings#keep_settings_on_destroy}
  */
  readonly keepSettingsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The project ID or path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings#project ProjectPagesSettings#project}
  */
  readonly project: string;
}
export interface ProjectPagesSettingsDeployments {
}

export function projectPagesSettingsDeploymentsToTerraform(struct?: ProjectPagesSettingsDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function projectPagesSettingsDeploymentsToHclTerraform(struct?: ProjectPagesSettingsDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProjectPagesSettingsDeploymentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectPagesSettingsDeployments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectPagesSettingsDeployments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // path_prefix - computed: true, optional: false, required: false
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class ProjectPagesSettingsDeploymentsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectPagesSettingsDeploymentsOutputReference {
    return new ProjectPagesSettingsDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings gitlab_project_pages_settings}
*/
export class ProjectPagesSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_pages_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectPagesSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectPagesSettings to import
  * @param importFromId The id of the existing ProjectPagesSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectPagesSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_pages_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_pages_settings gitlab_project_pages_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectPagesSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectPagesSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_pages_settings',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.6.1',
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
    this._forceHttps = config.forceHttps;
    this._isUniqueDomainEnabled = config.isUniqueDomainEnabled;
    this._keepSettingsOnDestroy = config.keepSettingsOnDestroy;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployments - computed: true, optional: false, required: false
  private _deployments = new ProjectPagesSettingsDeploymentsList(this, "deployments", false);
  public get deployments() {
    return this._deployments;
  }

  // force_https - computed: true, optional: true, required: false
  private _forceHttps?: boolean | cdktf.IResolvable; 
  public get forceHttps() {
    return this.getBooleanAttribute('force_https');
  }
  public set forceHttps(value: boolean | cdktf.IResolvable) {
    this._forceHttps = value;
  }
  public resetForceHttps() {
    this._forceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceHttpsInput() {
    return this._forceHttps;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_unique_domain_enabled - computed: true, optional: true, required: false
  private _isUniqueDomainEnabled?: boolean | cdktf.IResolvable; 
  public get isUniqueDomainEnabled() {
    return this.getBooleanAttribute('is_unique_domain_enabled');
  }
  public set isUniqueDomainEnabled(value: boolean | cdktf.IResolvable) {
    this._isUniqueDomainEnabled = value;
  }
  public resetIsUniqueDomainEnabled() {
    this._isUniqueDomainEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUniqueDomainEnabledInput() {
    return this._isUniqueDomainEnabled;
  }

  // keep_settings_on_destroy - computed: true, optional: true, required: false
  private _keepSettingsOnDestroy?: boolean | cdktf.IResolvable; 
  public get keepSettingsOnDestroy() {
    return this.getBooleanAttribute('keep_settings_on_destroy');
  }
  public set keepSettingsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._keepSettingsOnDestroy = value;
  }
  public resetKeepSettingsOnDestroy() {
    this._keepSettingsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSettingsOnDestroyInput() {
    return this._keepSettingsOnDestroy;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_https: cdktf.booleanToTerraform(this._forceHttps),
      is_unique_domain_enabled: cdktf.booleanToTerraform(this._isUniqueDomainEnabled),
      keep_settings_on_destroy: cdktf.booleanToTerraform(this._keepSettingsOnDestroy),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_https: {
        value: cdktf.booleanToHclTerraform(this._forceHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_unique_domain_enabled: {
        value: cdktf.booleanToHclTerraform(this._isUniqueDomainEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_settings_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._keepSettingsOnDestroy),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
