# `projectEnvironment` Submodule <a name="`projectEnvironment` Submodule" id="@cdktf/provider-gitlab.projectEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectEnvironment <a name="ProjectEnvironment" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment gitlab_project_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer"></a>

```typescript
import { projectEnvironment } from '@cdktf/provider-gitlab'

new projectEnvironment.ProjectEnvironment(scope: Construct, id: string, config: ProjectEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig">ProjectEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig">ProjectEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetAutoStopSetting">resetAutoStopSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetClusterAgentId">resetClusterAgentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetExternalUrl">resetExternalUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetFluxResourcePath">resetFluxResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetKubernetesNamespace">resetKubernetesNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetStopBeforeDestroy">resetStopBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetTier">resetTier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoStopSetting` <a name="resetAutoStopSetting" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetAutoStopSetting"></a>

```typescript
public resetAutoStopSetting(): void
```

##### `resetClusterAgentId` <a name="resetClusterAgentId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetClusterAgentId"></a>

```typescript
public resetClusterAgentId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalUrl` <a name="resetExternalUrl" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetExternalUrl"></a>

```typescript
public resetExternalUrl(): void
```

##### `resetFluxResourcePath` <a name="resetFluxResourcePath" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetFluxResourcePath"></a>

```typescript
public resetFluxResourcePath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubernetesNamespace` <a name="resetKubernetesNamespace" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetKubernetesNamespace"></a>

```typescript
public resetKubernetesNamespace(): void
```

##### `resetStopBeforeDestroy` <a name="resetStopBeforeDestroy" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetStopBeforeDestroy"></a>

```typescript
public resetStopBeforeDestroy(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetTier"></a>

```typescript
public resetTier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isConstruct"></a>

```typescript
import { projectEnvironment } from '@cdktf/provider-gitlab'

projectEnvironment.ProjectEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformElement"></a>

```typescript
import { projectEnvironment } from '@cdktf/provider-gitlab'

projectEnvironment.ProjectEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformResource"></a>

```typescript
import { projectEnvironment } from '@cdktf/provider-gitlab'

projectEnvironment.ProjectEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport"></a>

```typescript
import { projectEnvironment } from '@cdktf/provider-gitlab'

projectEnvironment.ProjectEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopAt">autoStopAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSettingInput">autoStopSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentIdInput">clusterAgentIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrlInput">externalUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePathInput">fluxResourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespaceInput">kubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroyInput">stopBeforeDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSetting">autoStopSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentId">clusterAgentId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrl">externalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePath">fluxResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroy">stopBeforeDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoStopAt`<sup>Required</sup> <a name="autoStopAt" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopAt"></a>

```typescript
public readonly autoStopAt: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `autoStopSettingInput`<sup>Optional</sup> <a name="autoStopSettingInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSettingInput"></a>

```typescript
public readonly autoStopSettingInput: string;
```

- *Type:* string

---

##### `clusterAgentIdInput`<sup>Optional</sup> <a name="clusterAgentIdInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentIdInput"></a>

```typescript
public readonly clusterAgentIdInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalUrlInput`<sup>Optional</sup> <a name="externalUrlInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrlInput"></a>

```typescript
public readonly externalUrlInput: string;
```

- *Type:* string

---

##### `fluxResourcePathInput`<sup>Optional</sup> <a name="fluxResourcePathInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePathInput"></a>

```typescript
public readonly fluxResourcePathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesNamespaceInput`<sup>Optional</sup> <a name="kubernetesNamespaceInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespaceInput"></a>

```typescript
public readonly kubernetesNamespaceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `stopBeforeDestroyInput`<sup>Optional</sup> <a name="stopBeforeDestroyInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroyInput"></a>

```typescript
public readonly stopBeforeDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `autoStopSetting`<sup>Required</sup> <a name="autoStopSetting" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSetting"></a>

```typescript
public readonly autoStopSetting: string;
```

- *Type:* string

---

##### `clusterAgentId`<sup>Required</sup> <a name="clusterAgentId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentId"></a>

```typescript
public readonly clusterAgentId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalUrl`<sup>Required</sup> <a name="externalUrl" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrl"></a>

```typescript
public readonly externalUrl: string;
```

- *Type:* string

---

##### `fluxResourcePath`<sup>Required</sup> <a name="fluxResourcePath" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePath"></a>

```typescript
public readonly fluxResourcePath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `stopBeforeDestroy`<sup>Required</sup> <a name="stopBeforeDestroy" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroy"></a>

```typescript
public readonly stopBeforeDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectEnvironmentConfig <a name="ProjectEnvironmentConfig" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.Initializer"></a>

```typescript
import { projectEnvironment } from '@cdktf/provider-gitlab'

const projectEnvironmentConfig: projectEnvironment.ProjectEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.name">name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.project">project</a></code> | <code>string</code> | The ID or full path of the project to environment is created for. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.autoStopSetting">autoStopSetting</a></code> | <code>string</code> | The auto stop setting for the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.clusterAgentId">clusterAgentId</a></code> | <code>number</code> | The cluster agent to associate with this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.description">description</a></code> | <code>string</code> | The description of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.externalUrl">externalUrl</a></code> | <code>string</code> | Place to link to for this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.fluxResourcePath">fluxResourcePath</a></code> | <code>string</code> | The Flux resource path to associate with this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#id ProjectEnvironment#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | The Kubernetes namespace to associate with this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.stopBeforeDestroy">stopBeforeDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the environment is attempted to be stopped before the environment is deleted. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.tier">tier</a></code> | <code>string</code> | The tier of the new environment. Valid values are `production`, `staging`, `testing`, `development`, `other`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#name ProjectEnvironment#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or full path of the project to environment is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#project ProjectEnvironment#project}

---

##### `autoStopSetting`<sup>Optional</sup> <a name="autoStopSetting" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.autoStopSetting"></a>

```typescript
public readonly autoStopSetting: string;
```

- *Type:* string

The auto stop setting for the environment.

Allowed values are `always`, `with_action`. If this is set to `with_action` and `stop_before_destroy` is `true`, the environment will be force-stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#auto_stop_setting ProjectEnvironment#auto_stop_setting}

---

##### `clusterAgentId`<sup>Optional</sup> <a name="clusterAgentId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.clusterAgentId"></a>

```typescript
public readonly clusterAgentId: number;
```

- *Type:* number

The cluster agent to associate with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#cluster_agent_id ProjectEnvironment#cluster_agent_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#description ProjectEnvironment#description}

---

##### `externalUrl`<sup>Optional</sup> <a name="externalUrl" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.externalUrl"></a>

```typescript
public readonly externalUrl: string;
```

- *Type:* string

Place to link to for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#external_url ProjectEnvironment#external_url}

---

##### `fluxResourcePath`<sup>Optional</sup> <a name="fluxResourcePath" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.fluxResourcePath"></a>

```typescript
public readonly fluxResourcePath: string;
```

- *Type:* string

The Flux resource path to associate with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#flux_resource_path ProjectEnvironment#flux_resource_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#id ProjectEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesNamespace`<sup>Optional</sup> <a name="kubernetesNamespace" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

The Kubernetes namespace to associate with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#kubernetes_namespace ProjectEnvironment#kubernetes_namespace}

---

##### `stopBeforeDestroy`<sup>Optional</sup> <a name="stopBeforeDestroy" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.stopBeforeDestroy"></a>

```typescript
public readonly stopBeforeDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the environment is attempted to be stopped before the environment is deleted.

If `auto_stop_setting` is set to `with_action`, this will perform a force stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#stop_before_destroy ProjectEnvironment#stop_before_destroy}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The tier of the new environment. Valid values are `production`, `staging`, `testing`, `development`, `other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_environment#tier ProjectEnvironment#tier}

---



