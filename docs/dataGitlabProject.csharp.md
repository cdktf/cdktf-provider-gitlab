# `dataGitlabProject` Submodule <a name="`dataGitlabProject` Submodule" id="@cdktf/provider-gitlab.dataGitlabProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProject <a name="DataGitlabProject" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProject(Construct Scope, string Id, DataGitlabProjectConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig">DataGitlabProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig">DataGitlabProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiDefaultGitDepth">ResetCiDefaultGitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiIdTokenSubClaimComponents">ResetCiIdTokenSubClaimComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPathWithNamespace">ResetPathWithNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPublicBuilds">ResetPublicBuilds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCiDefaultGitDepth` <a name="ResetCiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiDefaultGitDepth"></a>

```csharp
private void ResetCiDefaultGitDepth()
```

##### `ResetCiIdTokenSubClaimComponents` <a name="ResetCiIdTokenSubClaimComponents" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiIdTokenSubClaimComponents"></a>

```csharp
private void ResetCiIdTokenSubClaimComponents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPathWithNamespace` <a name="ResetPathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPathWithNamespace"></a>

```csharp
private void ResetPathWithNamespace()
```

##### `ResetPublicBuilds` <a name="ResetPublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPublicBuilds"></a>

```csharp
private void ResetPublicBuilds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProject.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProject.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabProject resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.allowPipelineTriggerApproveDeployment">AllowPipelineTriggerApproveDeployment</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.analyticsAccessLevel">AnalyticsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.archived">Archived</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoCancelPendingPipelines">AutoCancelPendingPipelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autocloseReferencedIssues">AutocloseReferencedIssues</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsDeployStrategy">AutoDevopsDeployStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildGitStrategy">BuildGitStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildsAccessLevel">BuildsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildTimeout">BuildTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciConfigPath">CiConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDeletePipelinesInSeconds">CiDeletePipelinesInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciPipelineVariablesMinimumOverrideRole">CiPipelineVariablesMinimumOverrideRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciRestrictPipelineCancellationRole">CiRestrictPipelineCancellationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciSeparatedCaches">CiSeparatedCaches</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerExpirationPolicy">ContainerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList">DataGitlabProjectContainerExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerRegistryAccessLevel">ContainerRegistryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emailsEnabled">EmailsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emptyRepo">EmptyRepo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.environmentsAccessLevel">EnvironmentsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.externalAuthorizationClassificationLabel">ExternalAuthorizationClassificationLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.featureFlagsAccessLevel">FeatureFlagsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forkingAccessLevel">ForkingAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.httpUrlToRepo">HttpUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.importUrl">ImportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.infrastructureAccessLevel">InfrastructureAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesAccessLevel">IssuesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesEnabled">IssuesEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lfsEnabled">LfsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeCommitTemplate">MergeCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergePipelinesEnabled">MergePipelinesEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsAccessLevel">MergeRequestsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsEnabled">MergeRequestsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeTrainsEnabled">MergeTrainsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.modelExperimentsAccessLevel">ModelExperimentsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.modelRegistryAccessLevel">ModelRegistryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.monitorAccessLevel">MonitorAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.namespaceId">NamespaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pipelinesEnabled">PipelinesEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.preventMergeWithoutJiraIssue">PreventMergeWithoutJiraIssue</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.printingMergeRequestLinkEnabled">PrintingMergeRequestLinkEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList">DataGitlabProjectPushRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.releasesAccessLevel">ReleasesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.removeSourceBranchAfterMerge">RemoveSourceBranchAfterMerge</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryAccessLevel">RepositoryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryStorage">RepositoryStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requirementsAccessLevel">RequirementsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.resolveOutdatedDiffDiscussions">ResolveOutdatedDiffDiscussions</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.restrictUserDefinedVariables">RestrictUserDefinedVariables</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.runnersToken">RunnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.securityAndComplianceAccessLevel">SecurityAndComplianceAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sharedWithGroups">SharedWithGroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList">DataGitlabProjectSharedWithGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsAccessLevel">SnippetsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsEnabled">SnippetsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.squashCommitTemplate">SquashCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sshUrlToRepo">SshUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.suggestionCommitMessage">SuggestionCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.topics">Topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.visibilityLevel">VisibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiEnabled">WikiEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepthInput">CiDefaultGitDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciIdTokenSubClaimComponentsInput">CiIdTokenSubClaimComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespaceInput">PathWithNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuildsInput">PublicBuildsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciIdTokenSubClaimComponents">CiIdTokenSubClaimComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespace">PathWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuilds">PublicBuilds</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllowPipelineTriggerApproveDeployment`<sup>Required</sup> <a name="AllowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.allowPipelineTriggerApproveDeployment"></a>

```csharp
public IResolvable AllowPipelineTriggerApproveDeployment { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AnalyticsAccessLevel`<sup>Required</sup> <a name="AnalyticsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.analyticsAccessLevel"></a>

```csharp
public string AnalyticsAccessLevel { get; }
```

- *Type:* string

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.archived"></a>

```csharp
public IResolvable Archived { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoCancelPendingPipelines`<sup>Required</sup> <a name="AutoCancelPendingPipelines" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoCancelPendingPipelines"></a>

```csharp
public string AutoCancelPendingPipelines { get; }
```

- *Type:* string

---

##### `AutocloseReferencedIssues`<sup>Required</sup> <a name="AutocloseReferencedIssues" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autocloseReferencedIssues"></a>

```csharp
public IResolvable AutocloseReferencedIssues { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoDevopsDeployStrategy`<sup>Required</sup> <a name="AutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsDeployStrategy"></a>

```csharp
public string AutoDevopsDeployStrategy { get; }
```

- *Type:* string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsEnabled"></a>

```csharp
public IResolvable AutoDevopsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BuildGitStrategy`<sup>Required</sup> <a name="BuildGitStrategy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildGitStrategy"></a>

```csharp
public string BuildGitStrategy { get; }
```

- *Type:* string

---

##### `BuildsAccessLevel`<sup>Required</sup> <a name="BuildsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildsAccessLevel"></a>

```csharp
public string BuildsAccessLevel { get; }
```

- *Type:* string

---

##### `BuildTimeout`<sup>Required</sup> <a name="BuildTimeout" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildTimeout"></a>

```csharp
public double BuildTimeout { get; }
```

- *Type:* double

---

##### `CiConfigPath`<sup>Required</sup> <a name="CiConfigPath" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciConfigPath"></a>

```csharp
public string CiConfigPath { get; }
```

- *Type:* string

---

##### `CiDeletePipelinesInSeconds`<sup>Required</sup> <a name="CiDeletePipelinesInSeconds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDeletePipelinesInSeconds"></a>

```csharp
public double CiDeletePipelinesInSeconds { get; }
```

- *Type:* double

---

##### `CiPipelineVariablesMinimumOverrideRole`<sup>Required</sup> <a name="CiPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciPipelineVariablesMinimumOverrideRole"></a>

```csharp
public string CiPipelineVariablesMinimumOverrideRole { get; }
```

- *Type:* string

---

##### `CiRestrictPipelineCancellationRole`<sup>Required</sup> <a name="CiRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciRestrictPipelineCancellationRole"></a>

```csharp
public string CiRestrictPipelineCancellationRole { get; }
```

- *Type:* string

---

##### `CiSeparatedCaches`<sup>Required</sup> <a name="CiSeparatedCaches" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciSeparatedCaches"></a>

```csharp
public IResolvable CiSeparatedCaches { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ContainerExpirationPolicy`<sup>Required</sup> <a name="ContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerExpirationPolicy"></a>

```csharp
public DataGitlabProjectContainerExpirationPolicyList ContainerExpirationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList">DataGitlabProjectContainerExpirationPolicyList</a>

---

##### `ContainerRegistryAccessLevel`<sup>Required</sup> <a name="ContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerRegistryAccessLevel"></a>

```csharp
public string ContainerRegistryAccessLevel { get; }
```

- *Type:* string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EmailsEnabled`<sup>Required</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emailsEnabled"></a>

```csharp
public IResolvable EmailsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EmptyRepo`<sup>Required</sup> <a name="EmptyRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emptyRepo"></a>

```csharp
public IResolvable EmptyRepo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnvironmentsAccessLevel`<sup>Required</sup> <a name="EnvironmentsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.environmentsAccessLevel"></a>

```csharp
public string EnvironmentsAccessLevel { get; }
```

- *Type:* string

---

##### `ExternalAuthorizationClassificationLabel`<sup>Required</sup> <a name="ExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.externalAuthorizationClassificationLabel"></a>

```csharp
public string ExternalAuthorizationClassificationLabel { get; }
```

- *Type:* string

---

##### `FeatureFlagsAccessLevel`<sup>Required</sup> <a name="FeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.featureFlagsAccessLevel"></a>

```csharp
public string FeatureFlagsAccessLevel { get; }
```

- *Type:* string

---

##### `ForkingAccessLevel`<sup>Required</sup> <a name="ForkingAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forkingAccessLevel"></a>

```csharp
public string ForkingAccessLevel { get; }
```

- *Type:* string

---

##### `HttpUrlToRepo`<sup>Required</sup> <a name="HttpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.httpUrlToRepo"></a>

```csharp
public string HttpUrlToRepo { get; }
```

- *Type:* string

---

##### `ImportUrl`<sup>Required</sup> <a name="ImportUrl" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.importUrl"></a>

```csharp
public string ImportUrl { get; }
```

- *Type:* string

---

##### `InfrastructureAccessLevel`<sup>Required</sup> <a name="InfrastructureAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.infrastructureAccessLevel"></a>

```csharp
public string InfrastructureAccessLevel { get; }
```

- *Type:* string

---

##### `IssuesAccessLevel`<sup>Required</sup> <a name="IssuesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesAccessLevel"></a>

```csharp
public string IssuesAccessLevel { get; }
```

- *Type:* string

---

##### `IssuesEnabled`<sup>Required</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesEnabled"></a>

```csharp
public IResolvable IssuesEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeepLatestArtifact`<sup>Required</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.keepLatestArtifact"></a>

```csharp
public IResolvable KeepLatestArtifact { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LfsEnabled`<sup>Required</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lfsEnabled"></a>

```csharp
public IResolvable LfsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MergeCommitTemplate`<sup>Required</sup> <a name="MergeCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeCommitTemplate"></a>

```csharp
public string MergeCommitTemplate { get; }
```

- *Type:* string

---

##### `MergePipelinesEnabled`<sup>Required</sup> <a name="MergePipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergePipelinesEnabled"></a>

```csharp
public IResolvable MergePipelinesEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MergeRequestsAccessLevel`<sup>Required</sup> <a name="MergeRequestsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsAccessLevel"></a>

```csharp
public string MergeRequestsAccessLevel { get; }
```

- *Type:* string

---

##### `MergeRequestsEnabled`<sup>Required</sup> <a name="MergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsEnabled"></a>

```csharp
public IResolvable MergeRequestsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MergeTrainsEnabled`<sup>Required</sup> <a name="MergeTrainsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeTrainsEnabled"></a>

```csharp
public IResolvable MergeTrainsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ModelExperimentsAccessLevel`<sup>Required</sup> <a name="ModelExperimentsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.modelExperimentsAccessLevel"></a>

```csharp
public string ModelExperimentsAccessLevel { get; }
```

- *Type:* string

---

##### `ModelRegistryAccessLevel`<sup>Required</sup> <a name="ModelRegistryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.modelRegistryAccessLevel"></a>

```csharp
public string ModelRegistryAccessLevel { get; }
```

- *Type:* string

---

##### `MonitorAccessLevel`<sup>Required</sup> <a name="MonitorAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.monitorAccessLevel"></a>

```csharp
public string MonitorAccessLevel { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.namespaceId"></a>

```csharp
public double NamespaceId { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PipelinesEnabled`<sup>Required</sup> <a name="PipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pipelinesEnabled"></a>

```csharp
public IResolvable PipelinesEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreventMergeWithoutJiraIssue`<sup>Required</sup> <a name="PreventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.preventMergeWithoutJiraIssue"></a>

```csharp
public IResolvable PreventMergeWithoutJiraIssue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PrintingMergeRequestLinkEnabled`<sup>Required</sup> <a name="PrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.printingMergeRequestLinkEnabled"></a>

```csharp
public IResolvable PrintingMergeRequestLinkEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PushRules`<sup>Required</sup> <a name="PushRules" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pushRules"></a>

```csharp
public DataGitlabProjectPushRulesList PushRules { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList">DataGitlabProjectPushRulesList</a>

---

##### `ReleasesAccessLevel`<sup>Required</sup> <a name="ReleasesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.releasesAccessLevel"></a>

```csharp
public string ReleasesAccessLevel { get; }
```

- *Type:* string

---

##### `RemoveSourceBranchAfterMerge`<sup>Required</sup> <a name="RemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.removeSourceBranchAfterMerge"></a>

```csharp
public IResolvable RemoveSourceBranchAfterMerge { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RepositoryAccessLevel`<sup>Required</sup> <a name="RepositoryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryAccessLevel"></a>

```csharp
public string RepositoryAccessLevel { get; }
```

- *Type:* string

---

##### `RepositoryStorage`<sup>Required</sup> <a name="RepositoryStorage" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryStorage"></a>

```csharp
public string RepositoryStorage { get; }
```

- *Type:* string

---

##### `RequestAccessEnabled`<sup>Required</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requestAccessEnabled"></a>

```csharp
public IResolvable RequestAccessEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RequirementsAccessLevel`<sup>Required</sup> <a name="RequirementsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requirementsAccessLevel"></a>

```csharp
public string RequirementsAccessLevel { get; }
```

- *Type:* string

---

##### `ResolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="ResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.resolveOutdatedDiffDiscussions"></a>

```csharp
public IResolvable ResolveOutdatedDiffDiscussions { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RestrictUserDefinedVariables`<sup>Required</sup> <a name="RestrictUserDefinedVariables" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.restrictUserDefinedVariables"></a>

```csharp
public IResolvable RestrictUserDefinedVariables { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RunnersToken`<sup>Required</sup> <a name="RunnersToken" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.runnersToken"></a>

```csharp
public string RunnersToken { get; }
```

- *Type:* string

---

##### `SecurityAndComplianceAccessLevel`<sup>Required</sup> <a name="SecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.securityAndComplianceAccessLevel"></a>

```csharp
public string SecurityAndComplianceAccessLevel { get; }
```

- *Type:* string

---

##### `SharedWithGroups`<sup>Required</sup> <a name="SharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sharedWithGroups"></a>

```csharp
public DataGitlabProjectSharedWithGroupsList SharedWithGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList">DataGitlabProjectSharedWithGroupsList</a>

---

##### `SnippetsAccessLevel`<sup>Required</sup> <a name="SnippetsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsAccessLevel"></a>

```csharp
public string SnippetsAccessLevel { get; }
```

- *Type:* string

---

##### `SnippetsEnabled`<sup>Required</sup> <a name="SnippetsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsEnabled"></a>

```csharp
public IResolvable SnippetsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SquashCommitTemplate`<sup>Required</sup> <a name="SquashCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.squashCommitTemplate"></a>

```csharp
public string SquashCommitTemplate { get; }
```

- *Type:* string

---

##### `SshUrlToRepo`<sup>Required</sup> <a name="SshUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sshUrlToRepo"></a>

```csharp
public string SshUrlToRepo { get; }
```

- *Type:* string

---

##### `SuggestionCommitMessage`<sup>Required</sup> <a name="SuggestionCommitMessage" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.suggestionCommitMessage"></a>

```csharp
public string SuggestionCommitMessage { get; }
```

- *Type:* string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.topics"></a>

```csharp
public string[] Topics { get; }
```

- *Type:* string[]

---

##### `VisibilityLevel`<sup>Required</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.visibilityLevel"></a>

```csharp
public string VisibilityLevel { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `WikiAccessLevel`<sup>Required</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiAccessLevel"></a>

```csharp
public string WikiAccessLevel { get; }
```

- *Type:* string

---

##### `WikiEnabled`<sup>Required</sup> <a name="WikiEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiEnabled"></a>

```csharp
public IResolvable WikiEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CiDefaultGitDepthInput`<sup>Optional</sup> <a name="CiDefaultGitDepthInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepthInput"></a>

```csharp
public double CiDefaultGitDepthInput { get; }
```

- *Type:* double

---

##### `CiIdTokenSubClaimComponentsInput`<sup>Optional</sup> <a name="CiIdTokenSubClaimComponentsInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciIdTokenSubClaimComponentsInput"></a>

```csharp
public string[] CiIdTokenSubClaimComponentsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PathWithNamespaceInput`<sup>Optional</sup> <a name="PathWithNamespaceInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespaceInput"></a>

```csharp
public string PathWithNamespaceInput { get; }
```

- *Type:* string

---

##### `PublicBuildsInput`<sup>Optional</sup> <a name="PublicBuildsInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuildsInput"></a>

```csharp
public object PublicBuildsInput { get; }
```

- *Type:* object

---

##### `CiDefaultGitDepth`<sup>Required</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepth"></a>

```csharp
public double CiDefaultGitDepth { get; }
```

- *Type:* double

---

##### `CiIdTokenSubClaimComponents`<sup>Required</sup> <a name="CiIdTokenSubClaimComponents" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciIdTokenSubClaimComponents"></a>

```csharp
public string[] CiIdTokenSubClaimComponents { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PathWithNamespace`<sup>Required</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespace"></a>

```csharp
public string PathWithNamespace { get; }
```

- *Type:* string

---

##### `PublicBuilds`<sup>Required</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuilds"></a>

```csharp
public object PublicBuilds { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectConfig <a name="DataGitlabProjectConfig" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double CiDefaultGitDepth = null,
    string[] CiIdTokenSubClaimComponents = null,
    string Id = null,
    string PathWithNamespace = null,
    object PublicBuilds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>double</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciIdTokenSubClaimComponents">CiIdTokenSubClaimComponents</a></code> | <code>string[]</code> | Fields included in the sub claim of the ID Token. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.id">Id</a></code> | <code>string</code> | The integer that uniquely identifies the project within the gitlab install. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.pathWithNamespace">PathWithNamespace</a></code> | <code>string</code> | The path of the repository with namespace. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.publicBuilds">PublicBuilds</a></code> | <code>object</code> | If true, jobs can be viewed by non-project members. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CiDefaultGitDepth`<sup>Optional</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciDefaultGitDepth"></a>

```csharp
public double CiDefaultGitDepth { get; set; }
```

- *Type:* double

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/project#ci_default_git_depth DataGitlabProject#ci_default_git_depth}

---

##### `CiIdTokenSubClaimComponents`<sup>Optional</sup> <a name="CiIdTokenSubClaimComponents" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciIdTokenSubClaimComponents"></a>

```csharp
public string[] CiIdTokenSubClaimComponents { get; set; }
```

- *Type:* string[]

Fields included in the sub claim of the ID Token.

Accepts an array starting with project_path. The array might also include ref_type and ref. Defaults to ["project_path", "ref_type", "ref"]. Introduced in GitLab 17.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/project#ci_id_token_sub_claim_components DataGitlabProject#ci_id_token_sub_claim_components}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The integer that uniquely identifies the project within the gitlab install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/project#id DataGitlabProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PathWithNamespace`<sup>Optional</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.pathWithNamespace"></a>

```csharp
public string PathWithNamespace { get; set; }
```

- *Type:* string

The path of the repository with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/project#path_with_namespace DataGitlabProject#path_with_namespace}

---

##### `PublicBuilds`<sup>Optional</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.publicBuilds"></a>

```csharp
public object PublicBuilds { get; set; }
```

- *Type:* object

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.0.0/docs/data-sources/project#public_builds DataGitlabProject#public_builds}

---

### DataGitlabProjectContainerExpirationPolicy <a name="DataGitlabProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectContainerExpirationPolicy {

};
```


### DataGitlabProjectPushRules <a name="DataGitlabProjectPushRules" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectPushRules {

};
```


### DataGitlabProjectSharedWithGroups <a name="DataGitlabProjectSharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectSharedWithGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectContainerExpirationPolicyList <a name="DataGitlabProjectContainerExpirationPolicyList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectContainerExpirationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get"></a>

```csharp
private DataGitlabProjectContainerExpirationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectContainerExpirationPolicyOutputReference <a name="DataGitlabProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectContainerExpirationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.cadence">Cadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.keepN">KeepN</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">NameRegexDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">NameRegexKeep</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nextRunAt">NextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.olderThan">OlderThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy">DataGitlabProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cadence`<sup>Required</sup> <a name="Cadence" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```csharp
public string Cadence { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KeepN`<sup>Required</sup> <a name="KeepN" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```csharp
public double KeepN { get; }
```

- *Type:* double

---

##### `NameRegexDelete`<sup>Required</sup> <a name="NameRegexDelete" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```csharp
public string NameRegexDelete { get; }
```

- *Type:* string

---

##### `NameRegexKeep`<sup>Required</sup> <a name="NameRegexKeep" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```csharp
public string NameRegexKeep { get; }
```

- *Type:* string

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```csharp
public string NextRunAt { get; }
```

- *Type:* string

---

##### `OlderThan`<sup>Required</sup> <a name="OlderThan" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```csharp
public string OlderThan { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectContainerExpirationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy">DataGitlabProjectContainerExpirationPolicy</a>

---


### DataGitlabProjectPushRulesList <a name="DataGitlabProjectPushRulesList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectPushRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get"></a>

```csharp
private DataGitlabProjectPushRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectPushRulesOutputReference <a name="DataGitlabProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectPushRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.branchNameRegex">BranchNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fileNameRegex">FileNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.memberCheck">MemberCheck</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.preventSecrets">PreventSecrets</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules">DataGitlabProjectPushRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```csharp
public string AuthorEmailRegex { get; }
```

- *Type:* string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.branchNameRegex"></a>

```csharp
public string BranchNameRegex { get; }
```

- *Type:* string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```csharp
public IResolvable CommitCommitterCheck { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CommitCommitterNameCheck`<sup>Required</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```csharp
public IResolvable CommitCommitterNameCheck { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```csharp
public string CommitMessageNegativeRegex { get; }
```

- *Type:* string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```csharp
public string CommitMessageRegex { get; }
```

- *Type:* string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```csharp
public IResolvable DenyDeleteTag { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fileNameRegex"></a>

```csharp
public string FileNameRegex { get; }
```

- *Type:* string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.memberCheck"></a>

```csharp
public IResolvable MemberCheck { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.preventSecrets"></a>

```csharp
public IResolvable PreventSecrets { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RejectNonDcoCommits`<sup>Required</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```csharp
public IResolvable RejectNonDcoCommits { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```csharp
public IResolvable RejectUnsignedCommits { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectPushRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules">DataGitlabProjectPushRules</a>

---


### DataGitlabProjectSharedWithGroupsList <a name="DataGitlabProjectSharedWithGroupsList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectSharedWithGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get"></a>

```csharp
private DataGitlabProjectSharedWithGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectSharedWithGroupsOutputReference <a name="DataGitlabProjectSharedWithGroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectSharedWithGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupAccessLevel">GroupAccessLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupFullPath">GroupFullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups">DataGitlabProjectSharedWithGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupAccessLevel`<sup>Required</sup> <a name="GroupAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupAccessLevel"></a>

```csharp
public double GroupAccessLevel { get; }
```

- *Type:* double

---

##### `GroupFullPath`<sup>Required</sup> <a name="GroupFullPath" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupFullPath"></a>

```csharp
public string GroupFullPath { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectSharedWithGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups">DataGitlabProjectSharedWithGroups</a>

---



