# `dataGitlabProject` Submodule <a name="`dataGitlabProject` Submodule" id="@cdktf/provider-gitlab.dataGitlabProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProject <a name="DataGitlabProject" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

new dataGitlabProject.DataGitlabProject(scope: Construct, id: string, config?: DataGitlabProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig">DataGitlabProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig">DataGitlabProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiDefaultGitDepth">resetCiDefaultGitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPathWithNamespace">resetPathWithNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPublicBuilds">resetPublicBuilds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCiDefaultGitDepth` <a name="resetCiDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetCiDefaultGitDepth"></a>

```typescript
public resetCiDefaultGitDepth(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPathWithNamespace` <a name="resetPathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPathWithNamespace"></a>

```typescript
public resetPathWithNamespace(): void
```

##### `resetPublicBuilds` <a name="resetPublicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.resetPublicBuilds"></a>

```typescript
public resetPublicBuilds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

dataGitlabProject.DataGitlabProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

dataGitlabProject.DataGitlabProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

dataGitlabProject.DataGitlabProject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

dataGitlabProject.DataGitlabProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.archived">archived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildGitStrategy">buildGitStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildsAccessLevel">buildsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildTimeout">buildTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciConfigPath">ciConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciSeparatedCaches">ciSeparatedCaches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList">DataGitlabProjectContainerExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emailsDisabled">emailsDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emptyRepo">emptyRepo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.environmentsAccessLevel">environmentsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.featureFlagsAccessLevel">featureFlagsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forkingAccessLevel">forkingAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.httpUrlToRepo">httpUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.importUrl">importUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.infrastructureAccessLevel">infrastructureAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesAccessLevel">issuesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesEnabled">issuesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lfsEnabled">lfsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.monitorAccessLevel">monitorAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.namespaceId">namespaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pipelinesEnabled">pipelinesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.printingMergeRequestLinkEnabled">printingMergeRequestLinkEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList">DataGitlabProjectPushRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.releasesAccessLevel">releasesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.removeSourceBranchAfterMerge">removeSourceBranchAfterMerge</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryStorage">repositoryStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.runnersToken">runnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sharedWithGroups">sharedWithGroups</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList">DataGitlabProjectSharedWithGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsEnabled">snippetsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.squashCommitTemplate">squashCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sshUrlToRepo">sshUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.topics">topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.visibilityLevel">visibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiEnabled">wikiEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepthInput">ciDefaultGitDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespaceInput">pathWithNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuildsInput">publicBuildsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespace">pathWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuilds">publicBuilds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `analyticsAccessLevel`<sup>Required</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.analyticsAccessLevel"></a>

```typescript
public readonly analyticsAccessLevel: string;
```

- *Type:* string

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.archived"></a>

```typescript
public readonly archived: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoCancelPendingPipelines`<sup>Required</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoCancelPendingPipelines"></a>

```typescript
public readonly autoCancelPendingPipelines: string;
```

- *Type:* string

---

##### `autocloseReferencedIssues`<sup>Required</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autocloseReferencedIssues"></a>

```typescript
public readonly autocloseReferencedIssues: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoDevopsDeployStrategy`<sup>Required</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsDeployStrategy"></a>

```typescript
public readonly autoDevopsDeployStrategy: string;
```

- *Type:* string

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `buildGitStrategy`<sup>Required</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildGitStrategy"></a>

```typescript
public readonly buildGitStrategy: string;
```

- *Type:* string

---

##### `buildsAccessLevel`<sup>Required</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildsAccessLevel"></a>

```typescript
public readonly buildsAccessLevel: string;
```

- *Type:* string

---

##### `buildTimeout`<sup>Required</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.buildTimeout"></a>

```typescript
public readonly buildTimeout: number;
```

- *Type:* number

---

##### `ciConfigPath`<sup>Required</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciConfigPath"></a>

```typescript
public readonly ciConfigPath: string;
```

- *Type:* string

---

##### `ciSeparatedCaches`<sup>Required</sup> <a name="ciSeparatedCaches" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciSeparatedCaches"></a>

```typescript
public readonly ciSeparatedCaches: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `containerExpirationPolicy`<sup>Required</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerExpirationPolicy"></a>

```typescript
public readonly containerExpirationPolicy: DataGitlabProjectContainerExpirationPolicyList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList">DataGitlabProjectContainerExpirationPolicyList</a>

---

##### `containerRegistryAccessLevel`<sup>Required</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.containerRegistryAccessLevel"></a>

```typescript
public readonly containerRegistryAccessLevel: string;
```

- *Type:* string

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailsDisabled`<sup>Required</sup> <a name="emailsDisabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emailsDisabled"></a>

```typescript
public readonly emailsDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `emptyRepo`<sup>Required</sup> <a name="emptyRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.emptyRepo"></a>

```typescript
public readonly emptyRepo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `environmentsAccessLevel`<sup>Required</sup> <a name="environmentsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.environmentsAccessLevel"></a>

```typescript
public readonly environmentsAccessLevel: string;
```

- *Type:* string

---

##### `externalAuthorizationClassificationLabel`<sup>Required</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.externalAuthorizationClassificationLabel"></a>

```typescript
public readonly externalAuthorizationClassificationLabel: string;
```

- *Type:* string

---

##### `featureFlagsAccessLevel`<sup>Required</sup> <a name="featureFlagsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.featureFlagsAccessLevel"></a>

```typescript
public readonly featureFlagsAccessLevel: string;
```

- *Type:* string

---

##### `forkingAccessLevel`<sup>Required</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.forkingAccessLevel"></a>

```typescript
public readonly forkingAccessLevel: string;
```

- *Type:* string

---

##### `httpUrlToRepo`<sup>Required</sup> <a name="httpUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.httpUrlToRepo"></a>

```typescript
public readonly httpUrlToRepo: string;
```

- *Type:* string

---

##### `importUrl`<sup>Required</sup> <a name="importUrl" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.importUrl"></a>

```typescript
public readonly importUrl: string;
```

- *Type:* string

---

##### `infrastructureAccessLevel`<sup>Required</sup> <a name="infrastructureAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.infrastructureAccessLevel"></a>

```typescript
public readonly infrastructureAccessLevel: string;
```

- *Type:* string

---

##### `issuesAccessLevel`<sup>Required</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesAccessLevel"></a>

```typescript
public readonly issuesAccessLevel: string;
```

- *Type:* string

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keepLatestArtifact`<sup>Required</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.keepLatestArtifact"></a>

```typescript
public readonly keepLatestArtifact: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mergeCommitTemplate`<sup>Required</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeCommitTemplate"></a>

```typescript
public readonly mergeCommitTemplate: string;
```

- *Type:* string

---

##### `mergePipelinesEnabled`<sup>Required</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergePipelinesEnabled"></a>

```typescript
public readonly mergePipelinesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mergeRequestsAccessLevel`<sup>Required</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsAccessLevel"></a>

```typescript
public readonly mergeRequestsAccessLevel: string;
```

- *Type:* string

---

##### `mergeRequestsEnabled`<sup>Required</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeRequestsEnabled"></a>

```typescript
public readonly mergeRequestsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mergeTrainsEnabled`<sup>Required</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.mergeTrainsEnabled"></a>

```typescript
public readonly mergeTrainsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `monitorAccessLevel`<sup>Required</sup> <a name="monitorAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.monitorAccessLevel"></a>

```typescript
public readonly monitorAccessLevel: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.namespaceId"></a>

```typescript
public readonly namespaceId: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pipelinesEnabled`<sup>Required</sup> <a name="pipelinesEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pipelinesEnabled"></a>

```typescript
public readonly pipelinesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `printingMergeRequestLinkEnabled`<sup>Required</sup> <a name="printingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.printingMergeRequestLinkEnabled"></a>

```typescript
public readonly printingMergeRequestLinkEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pushRules`<sup>Required</sup> <a name="pushRules" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pushRules"></a>

```typescript
public readonly pushRules: DataGitlabProjectPushRulesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList">DataGitlabProjectPushRulesList</a>

---

##### `releasesAccessLevel`<sup>Required</sup> <a name="releasesAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.releasesAccessLevel"></a>

```typescript
public readonly releasesAccessLevel: string;
```

- *Type:* string

---

##### `removeSourceBranchAfterMerge`<sup>Required</sup> <a name="removeSourceBranchAfterMerge" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.removeSourceBranchAfterMerge"></a>

```typescript
public readonly removeSourceBranchAfterMerge: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `repositoryAccessLevel`<sup>Required</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryAccessLevel"></a>

```typescript
public readonly repositoryAccessLevel: string;
```

- *Type:* string

---

##### `repositoryStorage`<sup>Required</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.repositoryStorage"></a>

```typescript
public readonly repositoryStorage: string;
```

- *Type:* string

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requirementsAccessLevel`<sup>Required</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.requirementsAccessLevel"></a>

```typescript
public readonly requirementsAccessLevel: string;
```

- *Type:* string

---

##### `resolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.resolveOutdatedDiffDiscussions"></a>

```typescript
public readonly resolveOutdatedDiffDiscussions: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `restrictUserDefinedVariables`<sup>Required</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.restrictUserDefinedVariables"></a>

```typescript
public readonly restrictUserDefinedVariables: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.runnersToken"></a>

```typescript
public readonly runnersToken: string;
```

- *Type:* string

---

##### `securityAndComplianceAccessLevel`<sup>Required</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.securityAndComplianceAccessLevel"></a>

```typescript
public readonly securityAndComplianceAccessLevel: string;
```

- *Type:* string

---

##### `sharedWithGroups`<sup>Required</sup> <a name="sharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sharedWithGroups"></a>

```typescript
public readonly sharedWithGroups: DataGitlabProjectSharedWithGroupsList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList">DataGitlabProjectSharedWithGroupsList</a>

---

##### `snippetsAccessLevel`<sup>Required</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsAccessLevel"></a>

```typescript
public readonly snippetsAccessLevel: string;
```

- *Type:* string

---

##### `snippetsEnabled`<sup>Required</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.snippetsEnabled"></a>

```typescript
public readonly snippetsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `squashCommitTemplate`<sup>Required</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.squashCommitTemplate"></a>

```typescript
public readonly squashCommitTemplate: string;
```

- *Type:* string

---

##### `sshUrlToRepo`<sup>Required</sup> <a name="sshUrlToRepo" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.sshUrlToRepo"></a>

```typescript
public readonly sshUrlToRepo: string;
```

- *Type:* string

---

##### `suggestionCommitMessage`<sup>Required</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.suggestionCommitMessage"></a>

```typescript
public readonly suggestionCommitMessage: string;
```

- *Type:* string

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

---

##### `visibilityLevel`<sup>Required</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.visibilityLevel"></a>

```typescript
public readonly visibilityLevel: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiAccessLevel"></a>

```typescript
public readonly wikiAccessLevel: string;
```

- *Type:* string

---

##### `wikiEnabled`<sup>Required</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.wikiEnabled"></a>

```typescript
public readonly wikiEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ciDefaultGitDepthInput`<sup>Optional</sup> <a name="ciDefaultGitDepthInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepthInput"></a>

```typescript
public readonly ciDefaultGitDepthInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pathWithNamespaceInput`<sup>Optional</sup> <a name="pathWithNamespaceInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespaceInput"></a>

```typescript
public readonly pathWithNamespaceInput: string;
```

- *Type:* string

---

##### `publicBuildsInput`<sup>Optional</sup> <a name="publicBuildsInput" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuildsInput"></a>

```typescript
public readonly publicBuildsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ciDefaultGitDepth`<sup>Required</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.ciDefaultGitDepth"></a>

```typescript
public readonly ciDefaultGitDepth: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.pathWithNamespace"></a>

```typescript
public readonly pathWithNamespace: string;
```

- *Type:* string

---

##### `publicBuilds`<sup>Required</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.publicBuilds"></a>

```typescript
public readonly publicBuilds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectConfig <a name="DataGitlabProjectConfig" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

const dataGitlabProjectConfig: dataGitlabProject.DataGitlabProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>number</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.id">id</a></code> | <code>string</code> | The integer that uniquely identifies the project within the gitlab install. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.pathWithNamespace">pathWithNamespace</a></code> | <code>string</code> | The path of the repository with namespace. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.publicBuilds">publicBuilds</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, jobs can be viewed by non-project members. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ciDefaultGitDepth`<sup>Optional</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.ciDefaultGitDepth"></a>

```typescript
public readonly ciDefaultGitDepth: number;
```

- *Type:* number

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project#ci_default_git_depth DataGitlabProject#ci_default_git_depth}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The integer that uniquely identifies the project within the gitlab install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project#id DataGitlabProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathWithNamespace`<sup>Optional</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.pathWithNamespace"></a>

```typescript
public readonly pathWithNamespace: string;
```

- *Type:* string

The path of the repository with namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project#path_with_namespace DataGitlabProject#path_with_namespace}

---

##### `publicBuilds`<sup>Optional</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectConfig.property.publicBuilds"></a>

```typescript
public readonly publicBuilds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/data-sources/project#public_builds DataGitlabProject#public_builds}

---

### DataGitlabProjectContainerExpirationPolicy <a name="DataGitlabProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

const dataGitlabProjectContainerExpirationPolicy: dataGitlabProject.DataGitlabProjectContainerExpirationPolicy = { ... }
```


### DataGitlabProjectPushRules <a name="DataGitlabProjectPushRules" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

const dataGitlabProjectPushRules: dataGitlabProject.DataGitlabProjectPushRules = { ... }
```


### DataGitlabProjectSharedWithGroups <a name="DataGitlabProjectSharedWithGroups" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

const dataGitlabProjectSharedWithGroups: dataGitlabProject.DataGitlabProjectSharedWithGroups = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectContainerExpirationPolicyList <a name="DataGitlabProjectContainerExpirationPolicyList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

new dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get"></a>

```typescript
public get(index: number): DataGitlabProjectContainerExpirationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectContainerExpirationPolicyOutputReference <a name="DataGitlabProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

new dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.cadence">cadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.keepN">keepN</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">nameRegexDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">nameRegexKeep</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nextRunAt">nextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.olderThan">olderThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy">DataGitlabProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```typescript
public readonly cadence: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keepN`<sup>Required</sup> <a name="keepN" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```typescript
public readonly keepN: number;
```

- *Type:* number

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `nameRegexDelete`<sup>Required</sup> <a name="nameRegexDelete" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```typescript
public readonly nameRegexDelete: string;
```

- *Type:* string

---

##### `nameRegexKeep`<sup>Required</sup> <a name="nameRegexKeep" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```typescript
public readonly nameRegexKeep: string;
```

- *Type:* string

---

##### `nextRunAt`<sup>Required</sup> <a name="nextRunAt" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```typescript
public readonly nextRunAt: string;
```

- *Type:* string

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```typescript
public readonly olderThan: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectContainerExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectContainerExpirationPolicy">DataGitlabProjectContainerExpirationPolicy</a>

---


### DataGitlabProjectPushRulesList <a name="DataGitlabProjectPushRulesList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

new dataGitlabProject.DataGitlabProjectPushRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get"></a>

```typescript
public get(index: number): DataGitlabProjectPushRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectPushRulesOutputReference <a name="DataGitlabProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

new dataGitlabProject.DataGitlabProjectPushRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.authorEmailRegex">authorEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.branchNameRegex">branchNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageRegex">commitMessageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.denyDeleteTag">denyDeleteTag</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fileNameRegex">fileNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.memberCheck">memberCheck</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.preventSecrets">preventSecrets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules">DataGitlabProjectPushRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorEmailRegex`<sup>Required</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```typescript
public readonly authorEmailRegex: string;
```

- *Type:* string

---

##### `branchNameRegex`<sup>Required</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.branchNameRegex"></a>

```typescript
public readonly branchNameRegex: string;
```

- *Type:* string

---

##### `commitCommitterCheck`<sup>Required</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```typescript
public readonly commitCommitterCheck: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `commitMessageNegativeRegex`<sup>Required</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```typescript
public readonly commitMessageNegativeRegex: string;
```

- *Type:* string

---

##### `commitMessageRegex`<sup>Required</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```typescript
public readonly commitMessageRegex: string;
```

- *Type:* string

---

##### `denyDeleteTag`<sup>Required</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```typescript
public readonly denyDeleteTag: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fileNameRegex`<sup>Required</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.fileNameRegex"></a>

```typescript
public readonly fileNameRegex: string;
```

- *Type:* string

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `memberCheck`<sup>Required</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.memberCheck"></a>

```typescript
public readonly memberCheck: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `preventSecrets`<sup>Required</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.preventSecrets"></a>

```typescript
public readonly preventSecrets: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rejectUnsignedCommits`<sup>Required</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```typescript
public readonly rejectUnsignedCommits: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectPushRules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectPushRules">DataGitlabProjectPushRules</a>

---


### DataGitlabProjectSharedWithGroupsList <a name="DataGitlabProjectSharedWithGroupsList" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

new dataGitlabProject.DataGitlabProjectSharedWithGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get"></a>

```typescript
public get(index: number): DataGitlabProjectSharedWithGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabProjectSharedWithGroupsOutputReference <a name="DataGitlabProjectSharedWithGroupsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer"></a>

```typescript
import { dataGitlabProject } from '@cdktf/provider-gitlab'

new dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupAccessLevel">groupAccessLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupFullPath">groupFullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupId">groupId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups">DataGitlabProjectSharedWithGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupAccessLevel`<sup>Required</sup> <a name="groupAccessLevel" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupAccessLevel"></a>

```typescript
public readonly groupAccessLevel: number;
```

- *Type:* number

---

##### `groupFullPath`<sup>Required</sup> <a name="groupFullPath" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupFullPath"></a>

```typescript
public readonly groupFullPath: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: number;
```

- *Type:* number

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabProjectSharedWithGroups;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProject.DataGitlabProjectSharedWithGroups">DataGitlabProjectSharedWithGroups</a>

---



